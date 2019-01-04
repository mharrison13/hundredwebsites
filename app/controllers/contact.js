import Controller from '@ember/controller';
import { match, not, gte, } from '@ember/object/computed';
import { and } from '@ember/object/computed';

  export default Controller.extend({
    name: '',
    emailAddress: '',
    responseMessage: '',
    message: '',
    headerMessage: 'Send Me a Message',

    isValidEmail: match('emailAddress', /^.+@.+\..+$/),
    isDisabled: not('isValid'),
    isLongEnough: gte("message.length", 5),
    isNameLongEnough: gte("message.length", 1),

    isValid: and('isValidEmail', 'isLongEnough', 'isNameLongEnough'),

    clearForm(){
      this.set('responseMessage', `We got your message and we’ll get in touch soon`);
      this.set('emailAddress', '');
      this.set('message', '');
      this.set('name', '');
    },

    actions: {
      send() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const day = new Date().getUTCDate()
        const now = new Date();
        const thisMonth = months[now.getMonth()];

        const submittedForm = {
          name: this.get('name'),
          emailAddress: this.get('emailAddress'),
          message: this.get('message'),
          timestamp: thisMonth + " " + day,
        };

        const newContact = this.store.createRecord('contact', submittedForm);
        newContact.save().then(function() {
        });
        this.clearForm();
      }
    }

  });
