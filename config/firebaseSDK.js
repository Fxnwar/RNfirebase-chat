import firebase from 'firebase';

class FirebaseSDK {
	constructor() {
		if (!firebase.apps.length) {
			firebase.initializeApp({
				apiKey: 'AIzaSyD8H859AOTo1VNQiR06ntQGSfoUuGJuOlg',
				authDomain: 'localhost',
				databaseURL: 'gs://rnfirebase-169bd.appspot.com',
				projectId: 'rnfirebase-169bd',
				storageBucket: 'gs://rnfirebase-169bd.appspot.com',
				messagingSenderId: '132475911902'
			});
		}
	}
	login = async (user, success_callback, failed_callback) => {
		await firebase
			.auth()
			.signInWithEmailAndPassword(user.email, user.password)
			.then(success_callback, failed_callback);
	};
}
const firebaseSDK = new FirebaseSDK();
export default firebaseSDK;