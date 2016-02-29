import Ember from 'ember';


// Define global variables here
var globals = Ember.Object.extend({

  appName: 'Captain\'s Log',

  // Social Media Links
  socialGithub: 'https://github.com/suleymansahin07',
  socialFacebook: 'https://github.com/suleymansahin07',
  socialLinkedin: 'https://tr.linkedin.com/in/suleymansahin07',
  socialTwitter: 'https://twitter.com/slymnshn07',
  socialSoundcloud: 'https://soundcloud.com/suleyman07',

  // Contact Information
  name: 'Suleyman SAHIN',
  email: 'suleyman.sahin.007@gmail.com',
  gravatarEmail: 'exe_wolf@hotmail.com'
});

export default {
  name: "Globals",

  initialize: function(application) {
    application.register('global:variables', globals, {singleton: true});
    application.inject('controller', 'globals', 'global:variables');
  }
};
