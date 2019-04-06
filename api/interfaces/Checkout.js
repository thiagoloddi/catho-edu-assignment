import find from 'lodash.find';

export default class Checkout {
  constructor(pricingRules) {
    this.pricingRules = pricingRules;

    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  total() {
    if(!this.items.length) return 0;

    return this.items.reduce((acc, item) => {
      const { price, quantity } = item;
      let finalPrice = price * quantity;
      const pricingRule = find(this.pricingRules, { product_id: item.product_id });

      if(pricingRule) {
        const { params: { x, value }, type} = pricingRule;

        switch(type) {
          case 'VALUE_FREE_AFTER_X': 
            finalPrice = (quantity - Math.floor(quantity / x) * value) * price; break;

          case 'VALUE_AFTER_X':
            finalPrice = x * price + (quantity - x) * value; break;
        }
      }

      return acc + finalPrice;
    }, 0)
  }


} 