import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCFwTuNgq2llBpyYeLXbJuP5PtgcSDToec",
    authDomain: "shopify-maasin-82ea8.firebaseapp.com",
    databaseURL: "https://shopify-maasin-82ea8.firebaseio.com",
    projectId: "shopify-maasin",
    storageBucket: "",
    messagingSenderId: "657309216284",
    appId: "1:657309216284:web:8cbe734566e4503c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUser = async userAuth => {
    if (!userAuth) {
        return;
    }

    const userRef = await firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            userRef.set({
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log("Error adding user.")
        }
    }

    return userRef;
}