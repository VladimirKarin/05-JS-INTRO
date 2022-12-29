class Shop {
  constructor(item, cost) {
    this.name = item;
    this.cost = cost;
  }

  intro() {
    console.log(
      'Hi, we are "Meskiuko kioskas".\nUse .items() method to get list of items to purchase.\nUse .order() method to get your order details.'
    );
  }
}

export { Shop };
