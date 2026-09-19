/*
 * VS-HCI documentation — page behaviour.
 *
 * Four small jobs, none of which needs a build step or a dependency:
 *   1. build "On this page" from the headings that are actually there
 *   2. highlight the heading currently in view
 *   3. filter the sidebar
 *   4. open and close the sidebar on a phone
 *
 * Plus one markup upgrade: blockquotes that open with **Note** / **Warning** /
 * **Danger** become callouts, so an author writes plain Markdown and still gets
 * the styled box.
 */
(function () {
  'use strict';

  var ICONS = {
    note:    '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    warning: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    danger:  '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>'
  };

  function svg(paths) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
           'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths + '</svg>';
  }

  function slugify(text) {
    return text.toLowerCase().trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  // ── Callouts ────────────────────────────────────────────────────────────
  function upgradeCallouts(root) {
    root.querySelectorAll('blockquote').forEach(function (quote) {
      var strong = quote.querySelector('p:first-child > strong:first-child');
      if (!strong) return;

      var kind = strong.textContent.trim().toLowerCase().replace(/[:.]$/, '');
      if (!ICONS[kind]) return;

      var label = strong.textContent.trim().replace(/[:.]$/, '');
      strong.remove();
      // The label is followed by a separator the author typed; drop it, and keep the
      // label as the callout's own title rather than losing it — without it the first
      // sentence reads as though it started mid-flow.
      var first = quote.querySelector('p');
      if (first) first.innerHTML = first.innerHTML.replace(/^\s*(—|–|-|:)\s*/, '');

      var box = document.createElement('div');
      box.className = 'callout callout--' + kind;
      box.innerHTML = svg(ICONS[kind]) +
        '<div><p class="callout__title">' + label + '</p>' + quote.innerHTML + '</div>';
      quote.replaceWith(box);
    });
  }

  // ── Wide tables get their own scroll box ────────────────────────────────
  function wrapTables(root) {
    root.querySelectorAll('table').forEach(function (table) {
      if (table.parentElement.classList.contains('table-scroll')) return;
      var box = document.createElement('div');
      box.className = 'table-scroll';
      table.parentNode.insertBefore(box, table);
      box.appendChild(table);
    });
  }

  // ── On this page ────────────────────────────────────────────────────────
  function buildToc(root) {
    var list = document.getElementById('toc-list');
    var toc = document.getElementById('toc');
    if (!list || !toc) return;

    var headings = root.querySelectorAll('h2, h3');
    if (headings.length < 2) { toc.classList.add('is-empty'); return; }

    var seen = {};
    var links = [];

    headings.forEach(function (h) {
      if (!h.id) {
        var base = slugify(h.textContent) || 'section';
        seen[base] = (seen[base] || 0) + 1;
        h.id = seen[base] > 1 ? base + '-' + seen[base] : base;
      }

      var anchor = document.createElement('a');
      anchor.className = 'heading-anchor';
      anchor.href = '#' + h.id;
      anchor.setAttribute('aria-label', 'Link to this section');
      anchor.textContent = '#';
      h.appendChild(anchor);

      var li = document.createElement('li');
      if (h.tagName === 'H3') li.className = 'toc--h3';
      var a = document.createElement('a');
      a.href = '#' + h.id;
      // The anchor character is part of the heading now; take the text without it.
      a.textContent = h.textContent.replace(/#$/, '').trim();
      li.appendChild(a);
      list.appendChild(li);
      links.push({ el: a, id: h.id, heading: h });
    });

    if (!('IntersectionObserver' in window)) return;

    // Mark the heading nearest the top of the viewport, rather than whichever
    // one last crossed an edge — scrolling up and down then agree.
    var visible = new Set();
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) visible.add(e.target.id);
        else visible.delete(e.target.id);
      });

      var active = null;
      for (var i = 0; i < links.length; i++) {
        if (visible.has(links[i].id)) { active = links[i].id; break; }
      }
      // Nothing in the band (a long section): keep the last heading passed.
      if (!active) {
        for (var j = links.length - 1; j >= 0; j--) {
          if (links[j].heading.getBoundingClientRect().top < 120) { active = links[j].id; break; }
        }
      }
      links.forEach(function (l) { l.el.classList.toggle('is-active', l.id === active); });
    }, { rootMargin: '-80px 0px -70% 0px', threshold: 0 });

    links.forEach(function (l) { observer.observe(l.heading); });
  }

  // ── Sidebar filter ──────────────────────────────────────────────────────
  function wireFilter() {
    var input = document.getElementById('nav-filter');
    var tree = document.getElementById('nav-tree');
    var empty = document.getElementById('nav-empty');
    if (!input || !tree) return;

    input.addEventListener('input', function () {
      var q = input.value.trim().toLowerCase();
      var hits = 0;

      tree.querySelectorAll('[data-nav-section]').forEach(function (section) {
        var shown = 0;
        section.querySelectorAll('[data-nav-item]').forEach(function (item) {
          var text = item.textContent.toLowerCase();
          var match = !q || text.indexOf(q) !== -1;
          item.hidden = !match;
          if (match) shown++;
        });
        // A section whose own heading matches shows all of its pages, not just the
        // ones that happen to repeat the word. Typing "storage" means the Storage
        // section, not only the one page with "storage" in its title.
        var heading = section.querySelector('.sidebar__heading').textContent.toLowerCase();
        if (q && heading.indexOf(q) !== -1) {
          section.querySelectorAll('[data-nav-item]').forEach(function (i) { i.hidden = false; });
          shown = section.querySelectorAll('[data-nav-item]').length;
        }
        section.hidden = shown === 0;
        hits += shown;
      });

      if (empty) empty.hidden = hits !== 0;
    });

    // Escape clears rather than closing the whole sidebar, which is the less
    // destructive of the two things Escape could mean here.
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && input.value) {
        e.stopPropagation();
        input.value = '';
        input.dispatchEvent(new Event('input'));
      }
    });

    // "/" focuses the filter, the shortcut every docs site has.
    document.addEventListener('keydown', function (e) {
      if (e.key !== '/' || e.metaKey || e.ctrlKey || e.altKey) return;
      var tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return;
      e.preventDefault();
      input.focus();
      input.select();
    });
  }

  // ── Mobile sidebar ──────────────────────────────────────────────────────
  function wireSidebar() {
    var toggle = document.getElementById('nav-toggle');
    var sidebar = document.getElementById('sidebar');
    var scrim = document.getElementById('sidebar-scrim');
    if (!toggle || !sidebar || !scrim) return;

    function setOpen(open) {
      sidebar.classList.toggle('is-open', open);
      scrim.classList.toggle('is-open', open);
      scrim.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      document.body.style.overflow = open ? 'hidden' : '';
    }

    toggle.addEventListener('click', function () {
      setOpen(!sidebar.classList.contains('is-open'));
    });
    scrim.addEventListener('click', function () { setOpen(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && sidebar.classList.contains('is-open')) setOpen(false);
    });
    // Following a link should land on the page, not on the menu that opened it.
    sidebar.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var prose = document.querySelector('.prose');
    if (prose) {
      upgradeCallouts(prose);
      wrapTables(prose);
      buildToc(prose);
    }
    wireFilter();
    wireSidebar();
  });
})();
