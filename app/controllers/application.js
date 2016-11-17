import Ember from 'ember';

const { inject } = Ember;

export default Ember.Controller.extend({
  queryParams: ['selectedTheme'],
  adminConfig: inject.service(),
  selectedTheme: 'default',
  themes: ['default', 'bootstrap'],
  actions: {
    changeTheme(theme) {
      this.setProperties({
        selectedTheme: theme,
        'adminConfig.activeTheme': theme
      });
    }
  }
});
