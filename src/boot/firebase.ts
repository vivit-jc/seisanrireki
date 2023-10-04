import { boot } from 'quasar/wrappers';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDSpKhuBGsoAZHnLbCN9vJxlSUWDGojS1w',

  authDomain: 'seisanrireki.firebaseapp.com',

  databaseURL:
    'https://seisanrireki-default-rtdb.asia-southeast1.firebasedatabase.app',

  projectId: 'seisanrireki',

  storageBucket: 'seisanrireki.appspot.com',

  messagingSenderId: '201976589321',

  appId: '1:201976589321:web:29c85d1fa2d7dfb627dcd8',
};

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  initializeApp(firebaseConfig);
});
