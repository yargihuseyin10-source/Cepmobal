
let cart = [];
function addToCart(name, price) {
  cart.push({name, price});
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(name + ' sepete eklendi!');
}
window.onload = function() {
  if(document.getElementById('cart-items')) {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    let list = document.getElementById('cart-items');
    let total = 0;
    cart.forEach(item => {
      let li = document.createElement('li');
      li.textContent = item.name + ' - ' + item.price + '₺';
      list.appendChild(li);
      total += item.price;
    });
    document.getElementById('cart-total').textContent = total;
  }
}
