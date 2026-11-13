(() => {
  const has = (node, ...tokens) => node && tokens.every((token) => node.classList?.contains(token));
  const direct = (node, predicate) => Array.from(node?.children || []).find(predicate);

  function make(tag, className) {
    const node = document.createElement(tag);
    node.className = className;
    return node;
  }

  let artworkId = 0;
  function cardArtwork(card, face) {
    if (!face || Array.from(face.children).some((child) => child.classList.contains('neo-card-art'))) return;
    const org = !!card.querySelector('.organization-badge, .business-badge');
    const id = `fleeca-art-${++artworkId}`;
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'neo-card-art');
    svg.setAttribute('viewBox', '0 0 340 195');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML = org ? `
      <defs>
        <linearGradient id="${id}-base" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#140C28"/><stop offset="1" stop-color="#08060E"/></linearGradient>
        <linearGradient id="${id}-trace" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#A855F7"/><stop offset="1" stop-color="#E879F9"/></linearGradient>
        <filter id="${id}-glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="2.2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <pattern id="${id}-grid" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M8 0H0V8" fill="none" stroke="#A855F7" stroke-opacity=".07" stroke-width=".5"/></pattern>
      </defs>
      <rect width="340" height="195" fill="url(#${id}-base)"/><rect width="340" height="195" fill="url(#${id}-grid)"/>
      <g fill="none" stroke="url(#${id}-trace)" stroke-width="1.35" stroke-opacity=".62" filter="url(#${id}-glow)">
        <path d="M190 0v27h22l18 18h44v18h66"/><path d="M240 0v18h24l20 20h56"/><path d="M340 80h-42l-17 17h-38v16h-38l-16 16h-40"/>
        <path d="M340 136h-34l-18-18h-24v-16h-29l-16-16h-34"/><path d="M330 195v-24h-22l-18-18h-36v-15h-44"/>
        <path d="M300 0v27h18l12 12h10M212 195v-22h-20l-14-14h-30"/>
      </g>
      <g fill="#E879F9" fill-opacity=".58" filter="url(#${id}-glow)"><circle cx="274" cy="45" r="2.3"/><circle cx="239" cy="115" r="2"/><circle cx="266" cy="118" r="2.2"/><circle cx="298" cy="153" r="2.5"/><circle cx="330" cy="39" r="2"/><circle cx="178" cy="159" r="2"/></g>
      <path d="M214 0h126v68h-30l-20-20h-40l-20-20h-16z" fill="#A855F7" fill-opacity=".11"/>
      <path d="M0 12h340M0 182h340" stroke="#E9D5FF" stroke-opacity=".08" stroke-width=".7"/>
      <rect x="1" y="1" width="338" height="193" rx="15" fill="none" stroke="#E9D5FF" stroke-opacity=".22"/>
      <rect width="340" height="195" fill="url(#${id}-grid)" opacity=".8"/>` : `
      <defs>
        <linearGradient id="${id}-base" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#18122B"/><stop offset="1" stop-color="#09070F"/></linearGradient>
        <linearGradient id="${id}-wave" x1=".15" y1=".2" x2=".9" y2=".8"><stop stop-color="#C084FC"/><stop offset=".48" stop-color="#6D28D9"/><stop offset="1" stop-color="#1E1B4B"/></linearGradient>
        <linearGradient id="${id}-edge" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#F5E9FF" stop-opacity=".12"/><stop offset=".5" stop-color="#FFF" stop-opacity=".98"/><stop offset="1" stop-color="#C084FC" stop-opacity=".72"/></linearGradient>
        <radialGradient id="${id}-aura" cx="82%" cy="25%" r="82%"><stop stop-color="#8B35D1" stop-opacity=".34"/><stop offset="1" stop-color="#8B35D1" stop-opacity="0"/></radialGradient>
        <pattern id="${id}-mesh" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><path d="M0 0V5" stroke="#D8B4FE" stroke-opacity=".08" stroke-width=".6"/></pattern>
        <filter id="${id}-shadow" x="-20%" y="-40%" width="150%" height="180%"><feGaussianBlur stdDeviation="3"/></filter>
      </defs>
      <rect width="340" height="195" fill="url(#${id}-base)"/><rect width="340" height="195" fill="url(#${id}-aura)"/><rect width="340" height="195" fill="url(#${id}-mesh)" opacity=".9"/>
      <path d="M94 195c47-4 74-13 100-30 27-17 38-32 61-42 25-11 48-13 85-13v85H94z" fill="#000" fill-opacity=".42" filter="url(#${id}-shadow)"/>
      <path d="M82 195c59-3 89-15 117-34 27-18 39-33 63-43 22-9 44-11 78-11v88H82z" fill="url(#${id}-wave)" fill-opacity=".82"/>
      <path d="M82 195c59-3 89-15 117-34 27-18 39-33 63-43 22-9 44-11 78-11" fill="none" stroke="#C084FC" stroke-opacity=".45" stroke-width="7" filter="url(#${id}-shadow)"/>
      <path d="M82 195c59-3 89-15 117-34 27-18 39-33 63-43 22-9 44-11 78-11" fill="none" stroke="url(#${id}-edge)" stroke-width="3.4"/>
      <path d="M96 195c51-3 80-15 106-32 27-18 39-32 63-41 22-9 44-10 75-10" fill="none" stroke="#FFF" stroke-opacity=".54" stroke-width=".9"/>
      <path d="M230 0h110v50h-22l-24-24h-40z" fill="#C084FC" fill-opacity=".12"/>
      <rect x="1" y="1" width="338" height="193" rx="15" fill="none" stroke="#E9D5FF" stroke-opacity=".24"/>`;
    face.prepend(svg);
  }

  function prepareCards(accountPicker) {
    const scroller = accountPicker.querySelector('.neo-card-scroller');
    if (!scroller) return;
    for (const card of scroller.querySelectorAll('.card-container')) {
      const face = card.querySelector('.card-face.card-front') || card.querySelector('.card-front');
      cardArtwork(card, face);
      const backArtworkFace = card.querySelector('.card-face.card-back') || card.querySelector('.card-back');
      cardArtwork(card, backArtworkFace);
      const creditCard = card.querySelector('.credit-card');
      const circles = card.querySelectorAll('.network-circles .circle');
      circles[0]?.classList.add('neo-silver-circle-one');
      circles[1]?.classList.add('neo-silver-circle-two');
      const refreshButtons = card.querySelectorAll('.external-flip-button');
      refreshButtons.forEach((button, index) => {
        button.classList.add(index > 0 ? 'neo-extra-flip' : 'neo-card-refresh');
      });
    }
  }

  function bindSidebar(nav) {
    if (!nav || nav.dataset.neoDelegated) return;
    nav.dataset.neoDelegated = 'true';
    nav.addEventListener('click', (event) => {
      const item = event.target.closest('[data-neo-tab]');
      if (!item || !nav.contains(item)) return;
      const app = findApp();
      if (!app) return;
      const { modal } = app;
      const workspace = modal.querySelector('.neo-workspace');
      const dashboard = modal.querySelector('.neo-dashboard-content');
      const accountPicker = modal.querySelector('.neo-account-picker');
      const accountPanel = modal.querySelector('.neo-account-panel');
      if (!workspace || !dashboard) return;

      const tab = item.dataset.neoTab;
      nav.querySelectorAll('.neo-nav-item').forEach((entry) => entry.classList.toggle('active', entry === item));
      workspace.querySelector('.neo-support-popover')?.remove();
      accountPanel?.classList.remove('neo-focus-transactions', 'neo-focus-cards');
      accountPicker?.classList.remove('neo-focus-cards');
      dashboard.classList.remove('neo-transactions-mode', 'neo-transfer-mode');

      if (tab === 'dashboard') {
        dashboard.scrollTo({ top: 0, behavior: 'smooth' });
        accountPanel?.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (tab === 'accounts' || tab === 'cards') {
        accountPicker?.classList.add('neo-focus-cards');
        accountPicker?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else if (tab === 'transactions') {
        dashboard.classList.add('neo-transactions-mode');
        accountPanel?.classList.add('neo-focus-transactions');
        const transactions = accountPanel?.querySelector('.neo-transactions-card');
        if (transactions && accountPanel) {
          const top = transactions.getBoundingClientRect().top - accountPanel.getBoundingClientRect().top + accountPanel.scrollTop;
          accountPanel.scrollTo({ top, behavior: 'smooth' });
        }
        accountPanel?.querySelector('.neo-transactions-toolbar input')?.focus({ preventScroll: true });
      } else if (tab === 'transfer') {
        dashboard.classList.add('neo-transactions-mode', 'neo-transfer-mode');
        accountPanel?.classList.add('neo-focus-transactions');
        applyTransferHistory(accountPanel);
        accountPanel?.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (tab === 'support') {
        const popover = make('section', 'neo-support-popover');
        popover.setAttribute('role', 'status');
        popover.innerHTML = '<strong>Banking support</strong><span>Contact your server staff for assistance.</span>';
        workspace.append(popover);
      }
    });
  }

  function applyTransferHistory(accountPanel) {
    if (!accountPanel) return;
    const panel = accountPanel.querySelector('.neo-transactions-card');
    const toolbar = panel?.querySelector('.neo-transactions-toolbar');
    const list = panel?.querySelector('.neo-transaction-list');
    if (!panel || !toolbar || !list) return;
    let title = toolbar.querySelector('.neo-transfer-title');
    if (!title) {
      title = make('h3', 'neo-transfer-title');
      title.textContent = 'Transfer History';
      const search = toolbar.querySelector('.relative.mb-4');
      toolbar.insertBefore(title, search || null);
    }
    const rows = Array.from(list.querySelectorAll('.neo-transaction-row'));
    let shown = 0;
    for (const row of rows) {
      const type = row.querySelector('.neo-tx-type')?.textContent || '';
      const matches = /\btransfer(?:red)?\b/i.test(type);
      row.classList.toggle('neo-transfer-hidden', !matches);
      if (matches) shown++;
    }
    let empty = list.querySelector('.neo-transfer-empty');
    if (!shown) {
      if (!empty) {
        empty = make('div', 'neo-transfer-empty');
        empty.textContent = 'No transfer history yet.';
        list.append(empty);
      }
    } else {
      empty?.remove();
    }
  }

  function bindWindowControls(modal, overlay, topbar, originalClose) {
    originalClose?.classList.add('neo-close-source');
    let controls = modal.querySelector('.neo-window-controls') || topbar.querySelector('.neo-window-controls');
    if (!controls) {
      controls = make('div', 'neo-window-controls');
      topbar.prepend(controls);
    }
    const existingCloseDot = controls.querySelector('.neo-dot-close');
    if (!existingCloseDot || existingCloseDot.tagName === 'BUTTON' || existingCloseDot.classList.contains('neo-close-source')) {
      controls.innerHTML = '<span class="neo-window-dot neo-dot-close" role="button" tabindex="0" aria-label="Close banking"></span><span class="neo-window-dot neo-dot-minimize" aria-hidden="true"></span><span class="neo-window-dot neo-dot-maximize" aria-hidden="true"></span>';
    }
    const close = controls.querySelector('.neo-dot-close');
    close?.classList.remove('neo-close-source');
    if (close && !close.dataset.neoBound) {
      close.dataset.neoBound = 'true';
      const requestClose = () => {
        if (originalClose) {
          originalClose.click();
          return;
        }
        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', bubbles: true }));
      };
      close.addEventListener('click', requestClose);
      close.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          requestClose();
        }
      });
    }
  }

  function addCardSwitchButtons(cardRow, accountPicker) {
    for (const [direction, label, icon] of [['previous', 'Previous card', 'fa-chevron-left'], ['next', 'Next card', 'fa-chevron-right']]) {
      let button = cardRow.querySelector(`.neo-carousel-arrow.${direction}`);
      if (!button) {
        button = make('button', `neo-carousel-arrow ${direction}`);
        button.type = 'button';
        button.setAttribute('aria-label', label);
        cardRow.append(button);
      }
      if (!button.querySelector('i')) button.innerHTML = `<i class="fa-solid ${icon}" aria-hidden="true"></i>`;
      if (button.dataset.neoBound) continue;
      button.dataset.neoBound = 'true';
      button.addEventListener('click', () => {
        const cards = Array.from(accountPicker.querySelectorAll('.neo-card-scroller .card-container'));
        const active = cards.findIndex((card) => card.classList.contains('active-card'));
        const nextIndex = active < 0 ? 0 : active + (direction === 'next' ? 1 : -1);
        if (cards[nextIndex]) {
          cards[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          cards[nextIndex].click();
          return;
        }
        const pageButtons = accountPicker.querySelectorAll('.neo-card-paging .pagination-btn');
        const pageButton = direction === 'next' ? pageButtons[1] : pageButtons[0];
        if (pageButton && !pageButton.disabled) {
          pageButton.click();
          window.setTimeout(() => {
            const updatedCards = Array.from(accountPicker.querySelectorAll('.neo-card-scroller .card-container'));
            const target = direction === 'next' ? updatedCards[0] : updatedCards[updatedCards.length - 1];
            target?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            target?.click();
          }, 80);
        }
      });
    }
  }

  function findApp() {
    for (const overlay of document.body.children) {
      if (!overlay.classList.contains('absolute')) continue;
      const modal = Array.from(overlay.children).find((child) => has(child, 'w-full', 'h-full', 'rounded-xl', 'overflow-hidden', 'relative'));
      const content = modal && Array.from(modal.children).find((child) => has(child, 'relative', 'z-10', 'w-full', 'h-full', 'p-6', 'flex', 'flex-col'));
      if (modal && content) return { overlay, modal, content };
    }
    return null;
  }

  function buildDashboard() {
    const app = findApp();
    if (!app) return;
    const { overlay, modal, content } = app;

    overlay.classList.add('neo-overlay');
    modal.classList.add('neo-modal');
    content.classList.add('neo-content-shell');

    let sidebar = direct(content, (node) => node.classList.contains('neo-sidebar'));
    let workspace = direct(content, (node) => node.classList.contains('neo-workspace'));
    let header = direct(content, (node) => has(node, 'flex', 'justify-between', 'items-center', 'mb-6'));
    let welcome = direct(content, (node) => has(node, 'p-4', 'rounded-lg', 'mb-6', 'relative', 'overflow-hidden'));
    let dashboard = direct(content, (node) => has(node, 'flex', 'gap-6', 'overflow-hidden') && Array.from(node.classList).some((name) => name.startsWith('h-[')));

    if (!sidebar) {
      sidebar = make('aside', 'neo-sidebar');
      content.prepend(sidebar);
    }
    if (!workspace) {
      workspace = make('div', 'neo-workspace');
      const topbar = make('div', 'neo-topbar');
      const body = make('main', 'neo-main');
      workspace.append(topbar, body);
      content.append(workspace);
    }

    const topbar = workspace.querySelector('.neo-topbar');
    const main = workspace.querySelector('.neo-main');
    const brand = header && direct(header, (node) => has(node, 'flex', 'items-center'));
    const closeButton = header && (direct(header, (node) => node.tagName === 'BUTTON') || header.querySelector('button'));
    const legacyClose = closeButton || Array.from(modal.querySelectorAll('button,[role="button"]')).find((button) => {
      if (button.closest('.neo-window-controls')) return false;
      const label = `${button.getAttribute('aria-label') || ''} ${button.getAttribute('title') || ''} ${button.textContent || ''}`;
      return /close/i.test(label) || button.querySelector('.fa-xmark,.fa-times,.fa-close');
    });
    const management = header && Array.from(header.children).find((node) => node !== brand && node !== closeButton);

    if (brand && brand.parentElement !== sidebar) sidebar.prepend(brand);
    let nav = document.querySelector('.neo-sidebar-nav');
    if (!nav) {
      nav = make('nav', 'neo-sidebar-nav');
      nav.setAttribute('aria-label', 'Banking dashboard sections');
      nav.innerHTML = '<button type="button" class="neo-nav-item active" data-neo-tab="dashboard"><i class="fa-solid fa-grip" aria-hidden="true"></i><span>Dashboard</span></button><button type="button" class="neo-nav-item" data-neo-tab="accounts"><i class="fa-regular fa-credit-card" aria-hidden="true"></i><span>Accounts</span></button><button type="button" class="neo-nav-item" data-neo-tab="transactions"><i class="fa-regular fa-file-lines" aria-hidden="true"></i><span>Transactions</span></button><button type="button" class="neo-nav-item" data-neo-tab="cards"><i class="fa-regular fa-credit-card" aria-hidden="true"></i><span>Cards</span></button><button type="button" class="neo-nav-item" data-neo-tab="transfer"><i class="fa-solid fa-arrow-right-arrow-left" aria-hidden="true"></i><span>Transfer</span></button><button type="button" class="neo-nav-item support" data-neo-tab="support"><i class="fa-regular fa-circle-question" aria-hidden="true"></i><span>Support</span></button>';
    }
    if (nav && nav.parentElement !== sidebar) sidebar.append(nav);

    if (closeButton && closeButton.parentElement !== modal) modal.append(closeButton);
    if (welcome && welcome.parentElement !== topbar) topbar.prepend(welcome);
    if (management && management.parentElement !== topbar) topbar.append(management);
    bindWindowControls(modal, overlay, topbar, closeButton);
    let windowHeader = modal.querySelector('.neo-window-header');
    if (!windowHeader) {
      windowHeader = make('div', 'neo-window-header');
      windowHeader.innerHTML = '<div class="neo-header-left"></div><div class="neo-header-center"></div><div class="neo-header-right"></div>';
      modal.prepend(windowHeader);
    }
    const headerLeft = windowHeader.querySelector('.neo-header-left');
    const headerCenter = windowHeader.querySelector('.neo-header-center');
    const headerRight = windowHeader.querySelector('.neo-header-right');
    const controls = topbar.querySelector('.neo-window-controls');
    const welcomeTitle = welcome?.querySelector('h2');
    const welcomeDate = welcome?.querySelector('p');
    if (controls && controls.parentElement !== headerLeft) headerLeft.append(controls);
    if (welcomeTitle && welcomeTitle.parentElement !== headerCenter) headerCenter.append(welcomeTitle);
    if (welcomeDate && welcomeDate.parentElement !== headerRight) headerRight.append(welcomeDate);
    legacyClose?.classList.add('neo-close-source');
    if (management?.querySelector('.neo-close-source')) management.classList.add('neo-hidden-management');
    if (header && !header.children.length) header.classList.add('neo-legacy-header');

    if (dashboard && dashboard.parentElement !== main) main.append(dashboard);
    if (!dashboard) dashboard = direct(main, (node) => has(node, 'neo-dashboard-content'));
    if (!dashboard) return;
    dashboard.classList.add('neo-dashboard-content');

    let cardRow = direct(dashboard, (node) => node.classList.contains('neo-card-row'));
    let accountArea = direct(dashboard, (node) => node.classList.contains('neo-account-area'));
    if (!cardRow) {
      cardRow = make('section', 'neo-card-row');
      dashboard.prepend(cardRow);
    }
    if (!accountArea) {
      accountArea = make('section', 'neo-account-area');
      dashboard.append(accountArea);
    }

    const accountPicker = direct(dashboard, (node) => has(node, 'flex-none', 'w-1/3', 'overflow-hidden', 'flex', 'flex-col'))
      || cardRow.querySelector('.neo-account-picker');
    const accountPanel = direct(dashboard, (node) => node.tagName === 'SECTION' && has(node, 'flex-1', 'overflow-hidden', 'flex', 'flex-col'))
      || accountArea.querySelector('.neo-account-panel');
    if (accountPicker && accountPicker.parentElement !== cardRow) cardRow.append(accountPicker);
    if (accountPanel && accountPanel.parentElement !== accountArea) accountArea.append(accountPanel);

    if (accountPicker) {
      accountPicker.classList.add('neo-account-picker');
      for (const heading of dashboard.querySelectorAll('h2')) {
        if (heading.textContent.trim().toLowerCase() === 'accounts') heading.classList.add('neo-account-heading');
      }
      for (const heading of accountPicker.querySelectorAll('h1,h2,h3')) {
        if (/^accounts?$/i.test(heading.textContent.trim())) heading.classList.add('neo-account-heading');
      }
      accountPicker.querySelectorAll('.relative.mb-4, .mb-4.flex.justify-between.items-center').forEach((node) => {
        if (/account\s*search/i.test(node.textContent || '') || node.querySelector('input')) node.classList.add('neo-account-search-source');
      });
      const oldFilter = accountPicker.querySelector('.category-selector');
      oldFilter?.classList.add('neo-hidden-filter');
      const carousel = accountPicker.querySelector('.overflow-y-auto.flex-1.pr-2.hide-scrollbar');
      carousel?.classList.add('neo-card-scroller');
      const pagingControls = accountPicker.querySelectorAll('.flex.justify-between.items-center.mt-4.px-2');
      for (const paging of pagingControls) {
        paging.classList.add('neo-card-paging');
        const count = paging.querySelector('span');
        if (count) count.setAttribute('aria-hidden', 'true');
      }
      for (const button of accountPicker.querySelectorAll('.external-flip-button')) {
        button.classList.add('neo-card-refresh');
      }
      prepareCards(accountPicker);
      addCardSwitchButtons(cardRow, accountPicker);
    }

    if (accountPanel) {
      accountPanel.classList.add('neo-account-panel');
      const summary = accountPanel.querySelector('.bg-fleeca-card.rounded-xl.mb-6.shadow-lg.overflow-hidden.border');
      if (summary) {
        summary.classList.add('neo-summary-card');
        let balanceRow = direct(summary, (node) => node.classList.contains('neo-balance-row'));
        if (!balanceRow) {
          const balance = summary.querySelector('.p-6.text-white.relative.overflow-hidden');
          const actions = summary.querySelector('.grid.grid-cols-3.gap-3.p-4.bg-fleeca-card');
          if (balance && actions) {
            balanceRow = make('div', 'neo-balance-row');
            summary.prepend(balanceRow);
            balanceRow.append(balance, actions);
            summary.querySelector('.border-t.border-b.border-fleeca-border')?.classList.add('neo-action-divider-source');
          }
        } else {
          const actions = summary.querySelector('.grid.grid-cols-3.gap-3.p-4.bg-fleeca-card');
          if (actions && actions.parentElement !== balanceRow) balanceRow.append(actions);
          summary.querySelector('.border-t.border-b.border-fleeca-border')?.classList.add('neo-action-divider-source');
        }
      }

      let transactionPanel = direct(accountPanel, (node) => node.classList.contains('neo-transactions-card'));
      const transactionSearch = accountPanel.querySelector('input[placeholder*="transaction" i]')
        || accountPanel.querySelector('.relative.mb-4 input');
      const searchWrap = transactionSearch?.closest('.relative.mb-4');
      const transactionList = direct(accountPanel, (node) => has(node, 'overflow-y-auto', 'flex-1', 'pr-2', 'hide-scrollbar', 'bg-fleeca-bg', 'rounded-lg', 'p-4', 'border'))
        || transactionPanel?.querySelector('.neo-transaction-list');
      let transactionHeading = accountPanel.querySelector('h3');

      for (const button of accountPanel.querySelectorAll('button')) {
        if (/export transaction data/i.test(button.textContent || '')) button.classList.add('neo-export-button');
      }

      if (!transactionPanel && (transactionHeading || searchWrap || transactionList)) {
        transactionPanel = make('section', 'neo-transactions-card');
        const toolbar = make('div', 'neo-transactions-toolbar');
        const columns = make('div', 'neo-transaction-columns');
        columns.innerHTML = '<span>Date</span><span>Description</span><span>Type</span><span>Reference</span><span>Amount</span>';
        transactionPanel.append(toolbar, columns);
        accountPanel.append(transactionPanel);
      }
      if (transactionPanel) {
        const toolbar = transactionPanel.querySelector('.neo-transactions-toolbar');
        if (transactionHeading) transactionHeading.classList.add('neo-source-transaction-heading');
        let displayHeading = toolbar.querySelector('.neo-transactions-title');
        if (!displayHeading) {
          displayHeading = make('h3', 'neo-transactions-title');
          displayHeading.textContent = transactionHeading?.textContent.trim() || 'Transactions';
          toolbar.prepend(displayHeading);
        }
        if (searchWrap && searchWrap.parentElement !== toolbar) toolbar.append(searchWrap);
        if (transactionList && transactionList.parentElement !== transactionPanel) transactionPanel.append(transactionList);
        transactionList?.classList.add('neo-transaction-list');
        for (const emptyHeader of accountPanel.querySelectorAll('.mb-4.flex.justify-between.items-center')) {
          if (!emptyHeader.textContent.trim() && !emptyHeader.querySelector('input,button')) emptyHeader.classList.add('neo-empty-source-header');
        }
        transactionList?.querySelectorAll('.rounded-lg.overflow-hidden.group.animate-slideUp.transition-all').forEach(styleTransactionRow);
        if (dashboard.classList.contains('neo-transfer-mode')) applyTransferHistory(accountPanel);
      }
    }
    bindSidebar(nav);
  }

  function styleTransactionRow(row) {
    row.classList.add('neo-transaction-row');
    if (row.dataset.neoStylesReady) return;
    const cells = row.firstElementChild;
    if (!cells || !cells.classList.contains('p-4')) return;
    const header = Array.from(cells.children).find((node) => has(node, 'flex', 'justify-between', 'items-center', 'mb-3'));
    const body = Array.from(cells.children).filter((node) => has(node, 'flex', 'justify-between', 'items-center', 'mb-3'))[1];
    const message = Array.from(cells.children).find((node) => has(node, 'p-3', 'rounded-lg', 'mt-2', 'transition-colors', 'duration-300'));
    const leading = header?.children[0];
    const titleHolder = leading?.children[1]?.children[0];
    const type = titleHolder && Array.from(titleHolder.children).find((node) => node.classList.contains('ml-2'));
    const reference = header?.children[1];
    const amountGroup = body?.children[0];
    const amount = amountGroup?.children[0];
    const receiver = amountGroup?.children[1];
    const date = body?.children[1]?.children[0];
    if (!header || !body || !titleHolder || !type || !reference || !amount || !date) return;
    cells.classList.add('neo-tx-cells');
    header.classList.add('neo-tx-header');
    leading?.classList.add('neo-tx-leading');
    titleHolder.classList.add('neo-tx-title-group');
    body.classList.add('neo-tx-body');
    amountGroup?.classList.add('neo-tx-amount-group');
    body.children[1]?.classList.add('neo-tx-time-group');
    message?.classList.add('neo-tx-message-box');
    date.classList.add('neo-tx-date');
    type.classList.add('neo-tx-type');
    reference.classList.add('neo-tx-reference');
    amount.classList.add('neo-tx-amount');
    receiver?.classList.add('neo-tx-receiver');
    message?.children[1]?.classList.add('neo-tx-message');
    row.dataset.neoStylesReady = 'true';
    const typeName = type.textContent.trim().toLowerCase();
    row.classList.toggle('neo-withdraw', typeName.includes('withdraw'));
    row.classList.toggle('neo-deposit', typeName.includes('deposit'));
    amount?.classList.toggle('neo-amount-has-sign', /^\s*[-−]/.test(amount.textContent || ''));
  }

  let queued = false;
  const schedule = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      buildDashboard();
    });
  };

  const observer = new MutationObserver(schedule);
  observer.observe(document.body, { childList: true, subtree: true });
  schedule();
})();
