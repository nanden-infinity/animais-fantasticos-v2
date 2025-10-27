export default class ScrollSuave {
  constructor(links, optins) {
    this.linksInternos = document.querySelectorAll(links);
    if (optins === undefined) {
      this.optins = {
        behavior: 'smooth',
        block: 'start',
      };
    } else {
      this.optins = optins;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.optins);
  }
  addLinkEvent() {
    this.linksInternos.forEach(link => {
      link.addEventListener('click', this.scrollToSection);
    });
  }
  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
