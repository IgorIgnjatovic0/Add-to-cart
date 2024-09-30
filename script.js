let gl_total = 0;

function addToCart(buttons) {
  let item = buttons.closest('.single-item');
  let name = item.querySelector('h3').innerText;
  let price = item.querySelector('.price').innerText;
  let input = parseInt(item.querySelector('input').value);
  let cart_item = document.querySelector('.cart-items');
  price = parseInt(price.substring(1));
  let total = price * input;

  if(input > 0) {
    cart_item.innerHTML += `<div class="cart-single-item">
                          <h3>${name}</h3> 
                          <p>$${price} x ${input} = $<span>${total}</span></p>
                          <button onclick="removeFromCart(this)">Remove</button>
                            </div>`;
    gl_total += total;
    document.querySelector('.total').innerText = `Total: $${gl_total}`;

    buttons.setAttribute('disabled', 'true');
    buttons.innerText = 'Added';

  } else {
    alert('Please enter a number');
  }
}

function removeFromCart(buttons) {
  let item = buttons.closest('.cart-single-item');
  item.remove();
  let price = item.querySelector('p span').innerText;
  price = parseInt(price);
  let name = item.querySelector('h3').innerText;

  let vegetables = document.querySelectorAll('.single-item');

  vegetables.forEach(function (vege) {
    let vege_name = vege.querySelector('.si-content h3').innerText;
    if(name === vege_name) {
      vege.querySelector('.actions input').value = 0;
      vege.querySelector('.actions button').innerText = 'Add';
      vege.querySelector('.actions button').removeAttribute('disabled');
    } else {
      console.log('Not valid');
    }
  });

  gl_total -= price;
  document.querySelector('.total').innerText = `Total: $${gl_total}`;
}
