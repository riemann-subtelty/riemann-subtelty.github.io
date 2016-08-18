angular.module('app', ['firebase'])
	.constant('BigHuge_ApiKey', 'd22bd31e16213de4e998838ee26d8b70')
    .config(function() {
        var config = {
            apiKey: "AIzaSyD0zGHLRsNUR144T_2bJxm_ZoFJJMqpDI0",
            authDomain: "sbrainstorming-e8084.firebaseapp.com",
            databaseURL: "https://sbrainstorming-e8084.firebaseio.com",
            storageBucket: "sbrainstorming-e8084.appspot.com",
        };
        firebase.initializeApp(config);
    });