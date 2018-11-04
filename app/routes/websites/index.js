import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.findAll('website');
  },

  actions: {

    deleteWebsite(website) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        website.destroyRecord();
      }
    }
  }

});
