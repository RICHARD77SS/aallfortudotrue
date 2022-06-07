var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    {
    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      //,requireDisplayName: false(True is default)
    signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIG_IN_METHOD
    },
  ],
  //outra opções
});
