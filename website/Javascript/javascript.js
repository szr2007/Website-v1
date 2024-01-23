document.getElementById("dropdown-btn").addEventListener("click", function() {
  var menu = document.getElementById("dropdown-menu");
  if (menu.style.display === "" || menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});


document.getElementById("menu-toggle").addEventListener("click", function() {
  var menu = document.getElementById("burgermenu");
  if (menu.style.display === "" || menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});

sessionStorage.setItem('mode', 'black')

let isColorChanged = false;

document.getElementById("vision").addEventListener("click", function() {
  var root = document.documentElement;

  if (isColorChanged) {
    // Color is changed, switch it back to its original state
    root.style.setProperty('--text-color', '');
    root.style.setProperty('--body-background', '');
    root.style.setProperty('--section1-background', '');
    root.style.setProperty('--section2-background', '');
    sessionStorage.setItem('mode', 'black')

  } else {
    // Color is not changed, set it to black
    root.style.setProperty('--text-color', 'black');
    root.style.setProperty('--body-background', 'rgba(230, 230, 230, 1)');
    root.style.setProperty('--section1-background', 'rgba(230, 230, 230, 1)');
    root.style.setProperty('--section2-background', 'rgba(230, 230, 230, 1)');
    sessionStorage.setItem('mode', 'white')
  }
  isColorChanged = !isColorChanged; 
});