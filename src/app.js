export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Learning Aurelia';
    config.options.pushState = true;
    config.options.hashChange = false;
    config.map([
      { route: '', redirect: 'contacts' },
      { route: 'contacts', name: 'contacts', moduleId: 'contact-list', nav: true, title: 'Contacts' },
      { route: 'contacts/:id', name: 'contact-details', moduleId: 'contact-details' }
    ]);
    /*
      INFO: maybe mapUnknownRoutes() should have more advanced implementation

      config.mapUnknownRoutes(instruction => getComponenntForRoute(instruction.fragment));

      getComponenntForRoute() - receives the URL path that triggered navigation
      and returns the path of the component that must be displayed.
    */
    config.mapUnknownRoutes('not-found');
  }
}
