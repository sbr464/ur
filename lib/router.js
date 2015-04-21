Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  yieldTemplates: {
    'topnav': {to: 'topnav'},
    // 'grid': {to: 'grid'}
  },
  waitOn: function() { return Meteor.subscribe('userdata'); }
});

Router.route('/', {name: 'userlanding'});



var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}



Router.onBeforeAction('dataNotFound', {only: 'clientPage'});
Router.onBeforeAction(requireLogin, {only: 'addNewClient',});


