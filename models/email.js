FauxMail.Email = DS.Model.extend({
  from: DS.attr(),
  to: DS.attr(),
  title: DS.attr(),
  body: DS.attr(),
  // comments: DS.hasMany('comment', {async: true})
});
