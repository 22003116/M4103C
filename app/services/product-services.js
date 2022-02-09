import Service from '@ember/service';
import { dProducts, dPromos } from 'm4103-c/data/datas';

export default class ProductServicesService extends Service {
  products = dProducts;
  promos = dPromos;

  get activeServices() {
    return this.products.filterBy('active', true);
  }

  get countActive() {
    return this.activeServices.length;
  }

  get sumActive() {
    let call = (total, product) => total + product.price;
    return this.activeServices.reduce(call, 0);
  }
}
