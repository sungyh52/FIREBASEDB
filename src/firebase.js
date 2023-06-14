//firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMvtJSOQJ5y8d85_rv12_RylQQZRqRkfs",
  authDomain: "babylion-57e19.firebaseapp.com",
  projectId: "babylion-57e19",
  storageBucket: "babylion-57e19.appspot.com",
  messagingSenderId: "51401285985",
  appId: `${"1:51401285985:web:f0a1fbadaf765712eae520"}`,
  measurementId: "G-R1RLCRMZ1J",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export {firestore};
