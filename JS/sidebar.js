let currentOpenSection = null;

function showDrawerSection(sectionId) {
  const drawer = document.getElementById('drawer');
  const target = document.getElementById(sectionId);

  if (currentOpenSection === target) {
    // If clicked again on the same section -> close it
    drawer.classList.remove('active');
    target.classList.remove('active');
    currentOpenSection = null;
  } else {
    // Open drawer and show the selected section
    drawer.classList.add('active');
    
    const sections = drawer.querySelectorAll('.drawer-section');
    sections.forEach(section => section.classList.remove('active'));
    
    target.classList.add('active');
    currentOpenSection = target;
  }
}
function toggleSubList(element) {
  element.classList.toggle('open');
}
