angular.module('decode')
.controller('ModalblogaddCtrl', ModalblogaddCtrl);

 ModalblogaddCtrl.$inject = ['$http','items'];

function  ModalblogaddCtrl($http,items) {
    var vm = this;
    vm.img = "images/upload.svg";
    console.log(items);
vm.save = function() {
      console.log(vm.team1);
          $http.post('/api/blogs',
          {
              team1:vm.team1,
              team2: vm.team2,
              team2: vm.tournament,
          })
        .success(function(data) {
            console.log(data);
             vm.team1 = ''
             vm.team2  = ''
             vm.tournament  = '';
             items.push(data);            
        })
      }
      
      vm.loadImg = function(newfile) {
          console.log(newfile)
          vm.img = "data:image/png;base64," + newfile.base64;
      }
     
  }