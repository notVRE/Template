var mini = true;

function toggleSidebar() {
  const sidebar = document.getElementById("mySidebar");
  const main = document.getElementById("main");

  if (mini) {
    console.log("opening sidebar");
    sidebar.style.width = "250px";
    main.style.marginLeft = "250px";
    mini = false;
  } else {
    console.log("closing sidebar");
    sidebar.style.width = "85px";
    main.style.marginLeft = "85px";
    mini = true;
  }
}

function toggleDropdown(id) {
  const content = document.getElementById(id);
  content.style.display = content.style.display === "flex" ? "none" : "flex";
}

function toggleDropdown(id) {
  const el = document.getElementById(id);
  if (el.style.display === "flex") {
    el.style.display = "none";
  } else {
    el.style.display = "flex";
  }
}
