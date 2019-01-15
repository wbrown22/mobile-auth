import firebase from 'firebase';

export const FACEBOOK_APP_ID = '292244011582510';

const config = {
    apiKey: "AIzaSyAFNQEpiVZhKjpMIVJaedm4yRxRnlaFjUU",
    authDomain: "beerpongapp-80f61.firebaseapp.com",
    databaseURL: "https://beerpongapp-80f61.firebaseio.com",
    projectId: "beerpongapp-80f61",
    storageBucket: "beerpongapp-80f61.appspot.com",
    messagingSenderId: "544619127181"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
