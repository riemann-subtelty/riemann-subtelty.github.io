/**
 * app controller
 */
angular.module('app').controller("MainController", ['Auth', 'LocalStorage', '$http', 'BigHuge_ApiKey', function(Auth, LocalStorage, $http, BigHuge_ApiKey){
    var vm = this;
    vm.results = [
        {
            id: 1,
            word: 'Word 1',
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
            count: 12
        },
        {
            id: 2,
            word: 'Word 2',
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
            count: 19
        },
        {
            id: 3,
            word: 'Word 3',
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
            count: 16
        },
        {
            id: 4,
            word: 'Word 4',
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
            count: 15
        }
    ];

    vm.user = {
        email: '',
        password: ''
    };

    /**
     * login
     */
    vm.login = function() {
        Auth.login(vm.user);
    };

    /**
     * signup
     */
    vm.signup = function() {
        Auth.signup(vm.user);
    };

    /**
     * logout
     */
    vm.logout = function() {
        Auth.logout();
    };

    /**
     * clear idea field
     */
    vm.clearField = function(index) {
    }

    /**
     * Create new textbox
     */
    
    loadBoxes();
    vm.createBox = function() {
        vm.boxes.push({
            text: '',
            firstword: '',
            firstword_thesaurus: ''
        });
    }

    vm.clearAll = function() {
        loadBoxes();
    }

    vm.deleteBox = function(index) {
        vm.boxes.splice(index, 1);
    }

    vm.textChanged = function(index) {
        vm.boxes[index].firstword = vm.boxes[index].text.split(' ')[0];
    }

    vm.runBox = function(index) {
        vm.boxes[index].firstword = vm.boxes[index].text.split(' ')[0];
        $http.get('https://words.bighugelabs.com/api/2/' + BigHuge_ApiKey + '/'+vm.boxes[index].firstword+'/json')
            .then(function(response) {
                keys = Object.keys(response.data);
                if(keys.length>0) {
                    vm.boxes[index].firstword_thesaurus = response.data[keys[0]].syn[0];
                } else {
                    vm.boxes[index].firstword_thesaurus = '';    
                }                
            }, function(response) {
                vm.boxes[index].firstword_thesaurus = '';
            });
    }

    function loadBoxes() {
        vm.boxes = [];
        vm.boxes.push({
            text: '',
            firstword: '',
            firstword_thesaurus: ''
        });
    }
}]);
