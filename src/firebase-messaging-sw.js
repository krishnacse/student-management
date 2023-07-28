importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

firebase.initializeApp({

        apiKey: "AIzaSyCDB94_AXggMbWXl6lXovmNvz1GRLEKh04",
        authDomain: "student-management-ng.firebaseapp.com",
        projectId: "student-management-ng",
        storageBucket: "student-management-ng.appspot.com",
        messagingSenderId: "1029449082832",
        appId: "1:1029449082832:web:a20f99aea1fed16f2cfbd5"

})
const messaging = firebase.messaging();