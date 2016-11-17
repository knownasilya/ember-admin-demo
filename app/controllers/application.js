import Ember from 'ember';

const { inject } = Ember;

export default Ember.Controller.extend({
  queryParams: ['selectedTheme'],
  adminConfig: inject.service(),
  themes: ['default', 'bootstrap'],
  selectedTheme: 'default'
});
