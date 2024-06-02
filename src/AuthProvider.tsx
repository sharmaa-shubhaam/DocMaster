import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import { ReactNode, useEffect, useState } from "react";
import { useAppDispatch } from "./redux/store";
import { fetchAuthState } from "./redux/authReducer";

function AuthProvider({ children }: { children: ReactNode }) {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    const handleAuthState = async () => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                setLoading(false);

                return null;
            }

            dispatch(
                fetchAuthState({
                    auth: true,
                    _id: user.uid || "",
                    email: user.email || "",
                    photo: user.photoURL || "",
                    username: user.displayName || "",
                })
            );
            setLoading(false);
        });
    };

    useEffect(() => {
        handleAuthState();
    }, []);
    if (loading) return <div>Loading...</div>;
    return children;
}

export default AuthProvider;
