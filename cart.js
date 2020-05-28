class Cart(){
  lines = [
    {
      product_id: 12,
      quantity: 3
    }
  ]

  fetchCart(){
    const response = fetch("/api/v1/my_cart")
  }

  addProduct(product_id, quantity){
    fetch("/api/v1/my_cart/addProduct", {
      method: "POST"
    })
  }

  increaseCartLine()
  decreaseCartLine()
  removeCartLine()
}
