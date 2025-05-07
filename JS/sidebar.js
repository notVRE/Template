function showDrawerSection(sectionId, element) {
  // Highlight the active nav item
  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');

  const drawer = document.getElementById('drawer');
  const target = sectionId ? document.getElementById(sectionId) : null;

  // 🔐 Always keep drawer open
  drawer.classList.add('active');

  // Hide all sections first
  document.querySelectorAll('.drawer-section').forEach(section => section.classList.remove('active'));

  if (target) {
    // Show the selected section
    target.classList.add('active');
    currentOpenSection = target;
  } else {
    // No specific section to show
    currentOpenSection = null;
  }
}
