window.onload = function () {
  const drawer = document.getElementById('drawer');
  drawer.classList.add('active');

  const developSection = document.getElementById('developSection');
  developSection.classList.add('active');

  // Handle sublist toggling
  document.querySelectorAll('.drawer li').forEach(item => {
    item.addEventListener('click', function (event) {
      event.stopPropagation();
      const subList = this.querySelector('.sub-list');
      if (subList) {
        subList.classList.toggle('open');
      }
    });
  });
};

let currentOpenSection = null;

function showDrawerSection(sectionId, element) {
  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');

  const drawer = document.getElementById('drawer');
  const target = document.getElementById(sectionId);

  if (!sectionId) {
    drawer.classList.remove('active');
    currentOpenSection = null;
    return;
  }

  drawer.classList.add('active');

  if (currentOpenSection === target) {
    target.classList.remove('active');
    currentOpenSection = null;
  } else {
    document.querySelectorAll('.drawer-section').forEach(section => section.classList.remove('active'));
    target.classList.add('active');
    currentOpenSection = target;
  }
}
