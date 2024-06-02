import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface IAuthReducer {
    _id: string;
    username: string;
    email: string;
    photo: string;
    auth: boolean;
}

const initialState: IAuthReducer = {
    _id: "",
    email: "",
    photo: "",
    auth: false,
    username: "",
};

const AuthReducer = createSlice({
    name: "AuthReducer",
    initialState,
    reducers: {
        fetchAuthState: (_, action: PayloadAction<IAuthReducer>) => {
            return {
                _id: action.payload._id,
                auth: action.payload.auth,
                email: action.payload.email,
                photo: action.payload.photo,
                username: action.payload.username,
            };
        },
    },
});

export const { fetchAuthState } = AuthReducer.actions;
export const authState = (state: RootState) => state.AuthReducer;

export default AuthReducer.reducer;
