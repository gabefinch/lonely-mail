FauxMail.EmailsController = Ember.ArrayController.extend({
  emailForm: false,
  from: 'me@lonely.com',
  to: 'me@lonely.com',
  actions: {
    toggleEmailForm: function() {
      this.set('emailForm', !this.get('emailForm'));
      this.set('from', 'me@lonely.com');
      this.set('to', 'me@lonely.com');
      this.set('title', '');
      this.set('body', '');
    },
    emailAdd: function() {
      var newEmail = this.store.createRecord('email', {
        from: this.get('from'),
        to: this.get('to'),
        title: this.get('title'),
        body: this.get('body')
      });
      newEmail.save();
      this.set('from', 'me@lonely.com');
      this.set('to', 'me@lonely.com');
      this.set('title', '');
      this.set('body', '');
      this.set('emailForm', false);
    }
  }
});
