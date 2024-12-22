document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

    document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
    tab.classList.add('active');

    const targetId = tab.getAttribute('data-tab');
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.remove('hidden');
    }

    const activeTab = document.querySelector('.tab.active');
    const underline = document.querySelector('.tabs .tab.active::after');  
    
    if (activeTab) {
      const tabRect = activeTab.getBoundingClientRect();
      const tabsContainer = document.querySelector('.tabs');
      const tabsRect = tabsContainer.getBoundingClientRect();
      const underlineElement = activeTab.querySelector('::after');

      activeTab.style.setProperty('--underline-left', `${tabRect.left - tabsRect.left}px`);
      activeTab.style.setProperty('--underline-width', `${tabRect.width}px`);
    }
  });
});
