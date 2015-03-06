FauxMail.Email = DS.Model.extend({
  from: DS.attr(),
  to: DS.attr(),
  subject: DS.attr(),
  body: DS.attr(),
});
