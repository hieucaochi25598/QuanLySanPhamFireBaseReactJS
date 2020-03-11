import * as firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAo0uGWSD2FyFPUHmFA164VZoK-qhiTRmY",
    authDomain: "quanlysanpham-496f9.firebaseapp.com",
    databaseURL: "https://quanlysanpham-496f9.firebaseio.com",
    projectId: "quanlysanpham-496f9",
    storageBucket: "quanlysanpham-496f9.appspot.com",
    messagingSenderId: "627197936520",
    appId: "1:627197936520:web:430fa34c8e9a783de4703d",
    measurementId: "G-KDZNWWWM14"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // var data = firebase.database().ref("danhSachSanPham/");
  //   data.once('value')
  //   .then((snapshot) => {
  //   //   console.log(snapshot.val())
  //   //   console.log(Object.values(snapshot.val()))
  //   console.log(snapshot)
  //   snapshot.forEach(item => console.log(item.val()))
  //   });