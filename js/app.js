angular.module('app', ['firebase'])
	.constant('BigHuge_ApiKey', '4b098a7ebd266723f7bd8f686b7b6ca6')
    .config(function() {
        var config = {
            apiKey: "AIzaSyD0zGHLRsNUR144T_2bJxm_ZoFJJMqpDI0",
            authDomain: "sbrainstorming-e8084.firebaseapp.com",
            databaseURL: "https://sbrainstorming-e8084.firebaseio.com",
            storageBucket: "sbrainstorming-e8084.appspot.com",
        };
        firebase.initializeApp(config);
    });