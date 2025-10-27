import debounce from './deboounce.js';

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.checkDistance = debounce(this.checkDistance.bind(this), 250);
  }
  // Paga a distancia de cada elemento em relacao ao top da site
  getDistance() {
    this.distance = [...this.sections].map(section => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // Verifica a distancia de cada a elemento elemento em relacao ao top da site
  checkDistance() {
    this.distance.forEach(({ element, offset }) => {
      if (window.pageYOffset > offset) element.classList.add('ativo');
      else if (element.classList.contains('ativo')) {
        element.classList.remove('ativo');
      }
    });
  }
  // animaScroll() {
  //   this.sections.forEach(section => {
  //     const sectionTop = section.getBoundingClientRect().top;
  //     const isSectionVisible = sectionTop - this.windowMetade < 0;
  //     if (isSectionVisible) section.classList.add('ativo');
  //     else if (section.classList.contains('ativo')) {
  //       section.classList.remove('ativo');
  //     }
  //   });
  // }
  init() {
    if (this.sections.length) {
      this.getDistance();
      // this.animaScroll();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }
}
