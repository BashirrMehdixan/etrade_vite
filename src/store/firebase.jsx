import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updatePassword, sendEmailVerification } from "firebase/auth";
import { getStorage } from 'firebase/storage'
import toast from "react-hot-toast";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCT1B73HYmYYDlu_zPKwA974fb5cv3wHGY",
    authDomain: "ecommerce-a4f44.firebaseapp.com",
    databaseURL: "https://ecommerce-a4f44-default-rtdb.firebaseio.com",
    projectId: "ecommerce-a4f44",
    storageBucket: "ecommerce-a4f44.appspot.com",
    messagingSenderId: "344641635273",
    appId: "1:344641635273:web:42431e19c0a85492e1de18"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();

export const login = async (email, password) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        return user
    } catch (e) {
        toast.error(e.code);
    }
}

export const signup = async (email, password) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        return user;
    } catch (e) {
        toast.error(e.code);
    }
}
export const logout = async () => {
    try {
        await signOut(auth);
        toast.success('You logged out successfully');
        return true
    } catch (e) {
        toast.error(e.message);
    }
}

export const passwordUpdate = async (password) => {
    try {
        await updatePassword(auth.currentUser, password)
        toast.success('Password changed successfully');
        return true;
    } catch (e) {
        toast.error(e.message);
    }
}

export const accountVerify = async () => {
    try {
        await sendEmailVerification(auth.currentUser);
        toast.success(`Verification mail will be sent to ${auth.currentUser.email} email address`);
    } catch (e) {
        toast.error(e.message);
    }
}
export default app;