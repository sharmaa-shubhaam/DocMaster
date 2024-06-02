import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../Firebase";

async function GoogleAuth() {
    try {
        const signedIn = await signInWithPopup(auth, provider);
        return signedIn.user;
    } catch (error) {
        console.log(error);
    }
}

async function logOut() {
    try {
        await signOut(auth);
        window.location.href = "/";
    } catch (error) {
        console.log(error);
    }
}

export { logOut };

export default GoogleAuth;
