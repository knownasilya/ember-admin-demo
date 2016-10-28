import Ember from 'ember';

const { set, inject } = Ember;

const Component = Ember.Component.extend({
  adminConfig: inject.service(),

  didReceiveAttrs() {
    let areas = this.get('adminConfig.areas');
    let area = this.get('area');
    let type = this.get('type') || 'default';
    let send = this.get('send');
    let location = `${area}.${type}`;

    if (!areas[area]) {
      areas[area] = Ember.Object.create();
    }

    set(areas, location, send);
  }
});

Component.reopenClass({
  positionalParams: ['area', 'type']
});

export default Component;
