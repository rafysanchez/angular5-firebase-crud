// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBDtm6x8qcjsJEHnDeVdP7KX6xJWmyCtaE',
    authDomain: 'products-f31d4.firebaseapp.com',
    databaseURL: 'https://products-f31d4.firebaseio.com',
    projectId: 'products-f31d4',
    storageBucket: '',
    messagingSenderId: '146376711248'
  }
};
