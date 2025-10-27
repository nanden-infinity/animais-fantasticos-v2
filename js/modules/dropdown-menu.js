import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = 'active';
    // Aqui estou definindo os argumentos padrao ao evento  caso  as mesmas nao foram passadas caso ao contrarioa funcao segue com a opcao escolhida
    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }
  // Activa o dropdown e adiciona
  // a funcao que observa o click fora dele
  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
    console.log(this);
  }

  // Adiciona os eventos ao dropdown menus
  addDropdownmenusEvent() {
    this.dropdownMenus.forEach(menu => {
      this.events.forEach(userEvent => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }
  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownmenusEvent();
    }
    return this;
  }
}
