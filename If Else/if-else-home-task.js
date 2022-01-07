const button = document.querySelector('button');





button.addEventListener('click', () => {
  var price = document.querySelector('.in').value;
  var answer = document.querySelector('.answer');
  function seller(price) {
    if (price >= 11000 && price <= 12000) {
      answer.innerHTML = 'Siz Malibu olisingiz mumkin ';
    } else if (price >= 10000 && price <= 11000) {
      answer.innerHTML = 'Siz Jentra olisingiz mumkin ';
    } else if (price >= 9000 && price <= 10000) {
      answer.innerHTML = 'Siz Cobalt olisingiz mumkin ';
    } else if (price >= 8000 && price <= 9000) {
      answer.innerHTML = 'Siz Nexia 3 olisingiz mumkin ';
    } else if (price >= 7000 && price <= 8000) {
      answer.innerHTML = 'Siz Spark olisingiz mumkin ';
    } else if (price >= 6000 && price <= 7000) {
      answer.innerHTML = 'Siz Nexia olisingiz mumkin ';
    } else if (price >= 5000 && price <= 6000) {
      answer.innerHTML = 'Siz Damas olisingiz mumkin ';
    } else if (price >= 5000 && price <= 4000) {
      answer.innerHTML = 'Siz Matiz olisingiz mumkin ';
    } else {
      answer.innerHTML = 'Bizda bunaqa narhdagi avftomobil yoq';
    }
  }
  seller(price);
});
