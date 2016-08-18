/**
 * app controller
 */
angular.module('app').controller("MainController", ['Auth', 'LocalStorage', function(Auth, LocalStorage){
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
        var boxCnt = LocalStorage.get('boxCount');
        if (boxCnt > 29)
            return;
        if (boxCnt)
            boxCnt ++;
        else
            boxCnt = 1;
        LocalStorage.set('boxCount', boxCnt);
        loadBoxes();
    }

    vm.clearAll = function() {
        LocalStorage.set('boxCount', 1);
        loadBoxes();
    }

    vm.deleteBox = function(index) {
        vm.boxes = [];
        var boxCnt = LocalStorage.get('boxCount') ? LocalStorage.get('boxCount') : 0;
        if (boxCnt > 0) {
            boxCnt --;
            LocalStorage.set('boxCount', boxCnt);
        }
        for (var i=1; i<=boxCnt; i++) {
            vm.boxes.push({
                index: i,
                id: 'box' + i,
                name: 'textbox' + i
            });
        }
    }

    function loadBoxes() {
        vm.boxes = [];
        var boxCnt = LocalStorage.get('boxCount') ? LocalStorage.get('boxCount') : 1;
        for (var i=1; i<=boxCnt; i++) {
            vm.boxes.push({
                index: i,
                id: 'box' + i,
                name: 'textbox' + i
            });
        }
    }
}]);
