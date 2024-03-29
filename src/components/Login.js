import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import firebase from 'firebase/compat/app';
import { signInWithRedirect } from "firebase/auth";
import 'firebase/compat/auth';

    // const provider = new 
    // firebase.auth.GoogleAuthProvider();
    signInWithRedirect();

const Login = () => {

    // const auth = getAuth(); 
    
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to Unichate!</h2>
                <div
                    className="login-button google"
                    onClick={() => signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined /> Sign In with Google
                </div>
                <br /> <br />
                <div
                    className="login-button facebook"
                    onClick={() => signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                >
                    <FacebookOutlined /> Sign In with Facebook
                </div>
            </div>
        </div>
    );
}

export default Login;
