require("./candy");

class ShoppingBasket {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    return this.items.push(item);
  }

  getTotalPrice() {
    return this.items
      .map((item) => item.getPrice())
      .reduce((total, price) => total + price, 0);
  }
}

module.exports = ShoppingBasket;
