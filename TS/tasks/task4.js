class Shop {
  items = [];

  set addGood(item) {
    this.items.push(item);
  }

  get goods() {
    return this.items;
  }
}


class BaseProduct {
  name;

  price;

  discount;

  constructor(name, price, discount) {
      this.name = name;
      this.price = price;
      this.discount = discount;
  }
}

class Banan extends BaseProduct {
  size;

  constructor(price, discount, size) {
    super('banan', price, discount);
    this.size = size;
  }
}

class IceCream extends BaseProduct {
  withGlace;

  constructor(price, discount, withGlace) {
    super('banan', price, discount);
    this.withGlace = withGlace;
  }
}

const shop = new Shop();

const iceCream = new IceCream(10, 0, true);
const banan = new Banan(5, 0.1, 'small');

shop.addGood(iceCream);
shop.addGood(banan);

console.log(shop.goods);