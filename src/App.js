import React, { Component } from "react";
import "./App.css";
import Sampledata from "./fire/SampleData";
import firebase from "firebase";

// Firebaseの設定
const firebaseConfig = {
  apiKey: "XXXxxx999",
  authDomain: "xxx.firebaseapp.com",
  databaseURL: "https://xxx.firebaseio.com",
  projectId: "xxx",
  storageBucket: "xxx.appspot.com",
  messagingSenderId: "999",
  appId: "1:999:web:000xxx",
  measurementId: "G-XXX",
};

// Firebaseの初期化
firebase.initializeApp(firebaseConfig);

// Appコンポーネント
class App extends Component {
  render() {
    return (
      <div>
        <h1>Fire</h1>
        <h2>Sample data.</h2>
        <Sampledata />
      </div>
    );
  }
}

export default App;
