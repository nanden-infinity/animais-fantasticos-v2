import ScrollSuave from "./modules/scroll-suave.js";
import ScrollAnima from "./modules/scroll-anima.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";

import initFetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/bitcoin.js";
import Funcionamento from "./modules/funcionamento.js";
import SlideNav from "./modules/slide.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();
const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();
const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();
const menuMobile = new MenuMobile('[data-menu="list"]', '[data-menu="button"]');
menuMobile.init();

const horarioFuncionamento = new Funcionamento("[data-semana]", "aberto");
horarioFuncionamento.init();

initAccordion();
initTabNav();
initModal();

initFetchAnimais();
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

const slide = new SlideNav(".slide-wrapper", ".slide");
slide.init();

slide.addControl(".custom-controls");
