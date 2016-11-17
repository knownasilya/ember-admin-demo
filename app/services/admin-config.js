import Ember from 'ember';

const { getOwner } = Ember;

export default Ember.Service.extend({
  init() {
    let owner = getOwner(this);
    this.set('dataAdapter', owner.lookup('data-adapter:main'));
    this.set('areas', Ember.Object.create());
    this.set('adminRoute', 'admin');
  },

  lookupArea(area, modelType) {
    let owner = getOwner(this);
    let areaOverrides = this.get(`areas.${area}`);
    let componentName;

    if (typeof areaOverrides === 'string') {
      componentName = areaOverrides;
    } else if (typeof areaOverrides === 'object') {
      componentName = areaOverrides[modelType];
    } else {
      throw new Error('Invalid area override. Must be a string or an object of keys/values.');
    }

    let component = owner.lookup(`component:${componentName}`);

    return component;
  },

  notifyRenderArea(areasPath) {
    this.notifyPropertyChange('areas');
  }
});

