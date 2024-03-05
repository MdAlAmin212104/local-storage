const listItem = document.getElementById('list-item');

const handleClick = ()=>{
      const productName = document.getElementById('Product-name');
      const ProductQuantity = document.getElementById('Product-quantity');
      const name = productName.value;
      const quantity = ProductQuantity.value;
      productName.value = '';
      ProductQuantity.value = '';
      elementDisplay(name, quantity);
      saveProductToLocalStorage(name, quantity);
}

const elementDisplay = (name, quantity)=>{
      const li = document.createElement('li');
      li.innerText = `${name} ${quantity}`;
      listItem.appendChild(li);
}
const getStoragesShoppingCart = ()=>{
      let cart = {};
      const storedCart = localStorage.getItem('cart');
      if(storedCart){
            cart = JSON.parse(storedCart);
      }
      return cart;
}

const saveProductToLocalStorage = (product, quantity)=>{
      const cart = getStoragesShoppingCart();
      cart[product] = quantity;
      const cartStringified = JSON.stringify(cart);
      localStorage.setItem('cart', cartStringified)

}
const displayFromLocalStorage = ()=>{
      const saveElement = getStoragesShoppingCart()
      for(const product in saveElement){
            const quantity = saveElement[product];
            elementDisplay(product, quantity);
      }
}
displayFromLocalStorage()