import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('website');
  },

  actions: {

    saveWebsite(newWebsite) {
      newWebsite.save().then(() => this.transitionTo('websites'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
