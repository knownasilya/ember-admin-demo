import Ember from 'ember';

const { inject } = Ember;

export default Ember.Controller.extend({
  adminConfig: inject.service(),
  selectedTheme: 'default',
  themes: ['default', 'bootstrap'],
  actions: {
    changeTheme(theme) {
      this.setProperties({
        selectedtheme: theme,
        'adminConfig.activeTheme': theme
      });
    }
  }
});
