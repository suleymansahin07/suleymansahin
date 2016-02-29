import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title: faker.lorem.sentence(4),
  text: faker.lorem.sentence(70)
});
