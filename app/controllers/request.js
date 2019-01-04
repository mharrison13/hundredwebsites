import Controller from '@ember/controller';
import { match, not, gte, equal } from '@ember/object/computed';
import { and } from '@ember/object/computed';

  export default Controller.extend({
    proceed: '',
    firstName: '',
    lastName: '',
    domainName: '',
    worktype: '',
    hostName: '',
    message: '',
    phoneNumber: '',
    emailAddress: '',
    responseMessage: '',
    headerMessage: 'Send Me a Message',

    isDisabled: not('isValid'),
    isValidEmail: match('emailAddress', /^.+@.+\..+$/),
    isLongEnough: gte("message.length", 5),
    isReCaptchaResponseTrue: equal('proceed', true),


    isValid: and('isValidEmail', 'isLongEnough', 'isReCaptchaResponseTrue'),

    clearForm(){
      this.set('responseMessage', `We got your message and we’ll get in touch soon`);
      this.set('firstName', ' ');
      this.set('lastName', ' ');
      this.set('domainName', ' ');
      this.set('worktype', ' ');
      this.set('hostName', ' ');
      this.set('message', ' ');
      this.set('phoneNumber', ' ');
      this.set('emailAddress', ' ');
    },

    actions: {
      send() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const day = new Date().getUTCDate()
        const now = new Date();
        const thisMonth = months[now.getMonth()];

        const submittedForm = {
          firstName: this.get('firstName'),
          lastName: this.get('lastName'),
          phoneNumber: this.get('phoneNumber'),
          domainName: this.get('domainName'),
          worktype: this.get('worktype'),
          hostName: this.get('hostName'),
          message: this.get('message'),
          emailAddress: this.get('emailAddress'),
          timestamp: thisMonth + " " + day,
        };

        const newContact = this.store.createRecord('request', submittedForm);
        newContact.save().then(function() {
        });
        this.clearForm();
      },
      onCaptchaResolved(reCaptchaResponse) {
        this.set('proceed', true);
        this.get('model').set('reCaptchaResponse', reCaptchaResponse);
      },
    }

  });
