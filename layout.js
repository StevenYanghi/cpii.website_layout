// JavaScript code for language switching
function switchLanguage(lang) {
    var elements = document.getElementsByClassName('lang');
    for (var i = 0; i < elements.length; i++) {
      elements[i].innerHTML = elements[i].getAttribute('data-' + lang);
    }
  }

// Add "active" class to the current menu item
var currentLocation = window.location.href;
var menuItems = document.querySelectorAll('nav a');

for (var i = 0; i < menuItems.length; i++) {
  if (menuItems[i].href === currentLocation) {
    menuItems[i].classList.add('active');
  }
}

// Add "active" class to the current menu item
var currentLocation = window.location.href;
var menuItems = document.querySelectorAll('nav a');

for (var i = 0; i < menuItems.length; i++) {
  if (menuItems[i].href === currentLocation) {
    menuItems[i].classList.add('active');
  }
}

// Add "open" class to the current pull-down menu item
var menuItemsWithSubMenu = document.querySelectorAll('nav li ul li a');

for (var j = 0; j < menuItemsWithSubMenu.length; j++) {
  if (menuItemsWithSubMenu[j].href === currentLocation) {
    menuItemsWithSubMenu[j].parentNode.parentNode.parentNode.classList.add('open');
  }
}