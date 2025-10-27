import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuList, menuButton, events) {
    this.menuList = document.querySelector(menuList);
    this.menuButton = document.querySelector(menuButton);
    this.openMenu = this.openMenu.bind(this);
    this.activeClass = 'active';
    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }
  }

  openMenu(events) {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach(evento =>
      this.menuButton.addEventListener(evento, this.openMenu)
    );
  }
  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
