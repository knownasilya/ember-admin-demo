import Ember from 'ember';

const { getOwner } = Ember;

export default Ember.Service.extend({
  init() {
    let owner = getOwner(this);
    this.set('dataAdapter', owner.lookup('data-adapter:main'));
  }
});
