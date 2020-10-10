/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDrllIh_TmQaZmlvxITLI9gbSSxUg_BErg',
    authDomain: 'sia-proyecto.firebaseapp.com',
    databaseURL: 'https://sia-proyecto.firebaseio.com',
    projectId: 'sia-proyecto',
    storageBucket: 'sia-proyecto.appspot.com',
    messagingSenderId: '625900791768',
    appId: '1:625900791768:web:6cd5d4774756333bcd74ad',
    measurementId: 'G-KZZY8Z5DVL',
  },
};
