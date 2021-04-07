import React from "react";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useContext, useState } from "react";
import Header from "../Header/Header";
import { UserContex } from "../../App";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const Login = () => {
  const [newUser, setNewUser] = useState(false);

  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photo: "",
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContex);
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const updateUserName = (name) => {
    var user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        // Update successful.
        console.log("user name updated successfully");
      })
      .catch(function (error) {
        // An error happened.
        console.log(error);
      });
  };

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, photoURL, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Container className="text-center box">
        <button className="bg-info text-white" onClick={handleSignIn}>
          continue with google
        </button>
      </Container>
    </div>
  );
};

export default Login;
