angular.module('app').factory('LocalStorage',  
    function() {

        return {
            get: function(key) {
                return localStorage.getItem(key);
            },

            set: function(key, value) {
                return localStorage.setItem(key, value);
            },

            unset: function(key) {
                return localStorage.removeItem(key);
            }
        }
    }
);