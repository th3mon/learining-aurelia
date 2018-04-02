export class App {
  constructor() {
    this.message = 'Hello World!';
  }

  configureRouter(config, router) {
    this.router = router;
    config.title = 'Learning Aurelia';
    config.map([
      { route: '', redirect: 'contacts' },
      { route: 'contacts', name: 'contacts', moduleId: 'contact-list', nav: true, title: 'Contacts' },
      { route: 'contacts/:id', name: 'contact-details', moduleId: 'contact-details' }
    ]);
  }
}
