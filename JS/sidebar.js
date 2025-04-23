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

// handle nested dropdowns inside drawer only
document.querySelectorAll('.drawer li > .sub-list').forEach(subList => {
  subList.parentElement.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevents triggering parent clicks
    this.classList.toggle('open');
  });
});
