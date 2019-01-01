import { computed, observer } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  fund: computed("model.websites.@each.fund", function() {
    const funds = this.get('model').getEach('fund');
    const sum = funds.reduce((a, b) => a + b, 0);
    return sum;
  }),
  
  percentage: computed('fund', function() {
    const fund = this.get('fund');
    const percentage = (fund / 100000) * 100
    return percentage;
  }),
});


