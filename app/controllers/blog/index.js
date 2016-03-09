import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({
  modelProxy: Ember.computed.alias('model'),
  page: 1,
  perPage: 5,
  pagedContent: pagedArray('modelProxy', {pageBinding: "page", perPageBinding: "perPage"})
});
