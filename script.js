const handleClick = ()=>{
      const productName = document.getElementById('Product-name');
      const ProductQuantity = document.getElementById('Product-quantity');
      const name = productName.value;
      const quantity = ProductQuantity.value;
      productName.value = '';
      ProductQuantity.value = '';
      console.log(name, quantity);
}