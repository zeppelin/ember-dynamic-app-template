import Ember from 'ember';

export default Ember.View.extend({
  templateName: Ember.computed.alias('controller.appTemplateName'),

  rerenderOnTemplateChange: function() {
    this.rerender();
  }.observes('templateName')
});
