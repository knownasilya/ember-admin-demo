import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) { return `Post ${i}`; },
  description() {
    return faker.company.catchPhrase();
  }
});
