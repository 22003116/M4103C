import EmberRouter from '@ember/routing/router';
import config from 'm4103-c/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('ex1');
});
