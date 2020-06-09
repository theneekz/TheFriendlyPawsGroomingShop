import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCaDvA2F2tsEiwob2ODwr46IE2-NWcJlwA',
  authDomain: 'friendly-paws-b9616.firebaseapp.com',
  databaseURL: 'https://friendly-paws-b9616.firebaseio.com',
  projectId: 'friendly-paws-b9616',
  storageBucket: 'friendly-paws-b9616.appspot.com',
  messagingSenderId: '516005075328',
  appId: '1:516005075328:web:eff34ba666d24b14da0965',
  measurementId: 'G-QN7LG59JJ3',
};
// Initialize Firebase
const fireApp = firebase.initializeApp(firebaseConfig);
export default fireApp;
