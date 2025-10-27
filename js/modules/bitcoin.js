export default function fetchBitcoin(url, target) {
  fetch(url)
    .then(response => response.json())
    .then(bitcoin => {
      const btnPreco = document.querySelector(target);
      btnPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch(erro => {
      return erro;
    });
}
