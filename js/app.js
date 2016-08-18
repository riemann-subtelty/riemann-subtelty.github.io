angular.module('app', ['firebase'])
    .config(function() {
        var config = {
            apiKey: "AIzaSyD0zGHLRsNUR144T_2bJxm_ZoFJJMqpDI0",
            authDomain: "sbrainstorming-e8084.firebaseapp.com",
            databaseURL: "https://sbrainstorming-e8084.firebaseio.com",
            storageBucket: "",
        };
        firebase.initializeApp(config);
    });