let currentOpenSection = null;

function showDrawerSection(sectionId, element) {
  // Clear previous active states
  document.querySelectorAll('.nav-item').forEach(btn =>
    btn.classList.remove('active')
  );
  // Set active to clicked one
  element.classList.add('active');

  const drawer = document.getElementById('drawer');

  if (!sectionId) {
    drawer.classList.remove('active');
    currentOpenSection = null;
    return;
  }

  const target = document.getElementById(sectionId);

  if (currentOpenSection === target) {
    drawer.classList.remove('active');
    target.classList.remove('active');
    currentOpenSection = null;
  } else {
    drawer.classList.add('active');
    document.querySelectorAll('.drawer-section').forEach(section =>
      section.classList.remove('active')
    );
    target.classList.add('active');
    currentOpenSection = target;
  }
}

function toggleSubList(element) {
  element.classList.toggle('open');
}

// Add toggle only if the item has a sub-list
document.querySelectorAll('.drawer li').forEach(item => {
  const subList = item.querySelector(':scope > .sub-list');
  if (subList) {
    item.addEventListener('click', function (e) {
      e.stopPropagation(); // Stop bubbling up
      this.classList.toggle('open');
    });
  } else {
    // If no sub-list, prevent the click from closing parent dropdown
    item.addEventListener('click', function (e) {
      e.stopPropagation(); // Just stops bubbling, doesn't toggle anything
    });
  }
});