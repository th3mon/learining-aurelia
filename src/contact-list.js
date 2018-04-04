import { inject } from 'aurelia-framework';

@inject()
export class ContactList {
  constructor() {
    console.log(this.constructor);
  }
}
