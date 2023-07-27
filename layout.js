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

// Add "open" class to the current pull-down menu item
var menuItemsWithSubMenu = document.querySelectorAll('nav li ul li a');

for (var j = 0; j < menuItemsWithSubMenu.length; j++) {
  if (menuItemsWithSubMenu[j].href === currentLocation) {
    menuItemsWithSubMenu[j].parentNode.parentNode.parentNode.classList.add('open');
  }
}

scheme
Copy
const stickyList = document.querySelector('.navbar');
const stickyListTop = stickyList.offsetTop;

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= stickyListTop) {
    stickyList.classList.add('sticky');
  } else {
    stickyList.classList.remove('sticky');
  }
});

(function flexible(window, document) {
  const doc = document.documentElement;
  const dpr = window.devicePixelRatio || 1;

  // 适配 body 字体大小
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + 'px';
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize);
    }
  }
  setBodyFontSize();


  // 页面容器伸缩时重置 rem 单位
  window.addEventListener('resize', setRemUnit);
  window.addEventListener('pageshow', function (err) {
    if (e.persisted || (window.performance && window.performance.navigation.type === 2)) {
      setRemUnit();
    }
  });

  // 检测是否支持 0.5 px（用于解决 1px 问题）
  if (dpr >= 2) {
    const fakeBody = document.createElement('body');
    const div = document.createElement('div');

    div.style.border = '.5px solid transparent';
    fakeBody.appendChild(div);
    doc.appendChild(fakeBody);

    if (div.offsetHeight === 1) {
      doc.classList.add('hairlines');
    }
  }
})(window, document);