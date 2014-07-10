import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor('application').set('appTemplateName', 'application-login');
  },

  deactivate: function() {
    this.controllerFor('application').set('appTemplateName', 'application');
  }
});
