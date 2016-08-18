angular.module('app').factory('Auth', ['$rootScope', '$firebaseAuth', '$firebaseObject',
    function($rootScope, $firebaseAuth, $firebaseObject) {
        
        var ref = firebase.database().ref();
        var auth = $firebaseAuth(firebase.auth());
        return {
            login: function(user) {
                auth.$signInWithEmailAndPassword(user.email, user.password)
                    .then(function(res) {
                        //logged in
                        console.log(res);
                        $rootScope.isLoggedIn = true;
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },

            signup: function(user) {
                auth.$createUserWithEmailAndPassword(user.email, user.password)
                    .then(function(res) {
                        //signed up
                        $rootScope.isSignedUp = true;
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },

            logout: function() {
                $rootScope.isLoggedIn = false;
                $rootScope.isSignedUp = false;
                return auth.$signOut();
            }
        }
    }]
);