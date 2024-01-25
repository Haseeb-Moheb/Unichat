import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { auth } from "../components/firebase";

const AuthContext = React.createContext();
// const auth = firebase.auth();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        
        auth.onAuthStateChanged((user) =>  {
            setUser(user);
            setLoading(false);
            navigate('/chats');
        })

    }, [user,navigate]);

    const value = { user };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
