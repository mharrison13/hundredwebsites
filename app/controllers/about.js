import { computed, observer } from '@ember/object';
import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({
  formatCurrency(amount) {
    const delimiter = ","; 
    let i = parseFloat(amount);
    if(isNaN(i)) { return ''; }
    const minus = '';
    if(i < 0) { minus = '-'; }
    i = Math.abs(i);
    i = parseInt((i + .5));

    const a = [];
    let n = new String(i);
    while(n.length > 3)
    {
      const nn = n.substr(n.length-3);
      a.unshift(nn);
      n = n.substr(0,n.length-3);
    }
    if(n.length > 0) { a.unshift(n); }
    n = a.join(delimiter);
    amount = minus + "$" + n;
    return amount;
  },

  debt: computed('model', function() {
    
    const totalDebtStart = 833000000000; 
    const debtPerSecond = 2853.88; 

    const today = new Date();
    const timeStampStart = 1277956800; 
    const newSeconds = today.getTime() / 1000 - timeStampStart; 
    const totalDebtNow = totalDebtStart + newSeconds * debtPerSecond;
    return this.formatCurrency(totalDebtNow); 
  }),
});


