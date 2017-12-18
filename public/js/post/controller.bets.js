angular.module('decode').controller('BetsCtrl', BetsCtrl);

BetsCtrl.$inject = ['$http', '$modal'];

function BetsCtrl($http, $modal) {
    console.log("BetsCtrl");
    var vm = this;
     $http.get('/api/blogs')
     .success(function(data){
         console.log(data);
         vm.items = data;
     })
 
    
    // $http.get('/asd')
    //     .success(function(data){
    //         vm.data = data;
    //         console.log(data);
    //     })
    //     .error(function(data){
    //         console.log("Error ", data);
    //     })
  vm.send = function() {
      console.log(vm.team1);
          $http.post('/api/blogs',
          {
              team1:vm.team1,
              team2: vm.team2,
              tournaments: vm.tornament
          })
        .success(function(data) {
            console.log(data);
             vm.team1 = ''
             vm.team2  = '';
             vm.tornament  = '';
             vm.items.push(data);            
        })
      }
      
      vm.deleteBlog = function(blog) {
        $http.delete('/api/blogs/' + blog._idu)
        .success(function(){
        var index = vm.items.indexOf(blog);
        vm.items.splice(index,1);
      })
}

     vm.addModal = function() {
          var addModal = $modal({
            show: false,
            container: 'main',
            templateUrl: 'views/modal-bets--add.html',
            controller: 'ModalblogaddCtrl',
            controllerAs: 'vm',
            resolve: {
                items:function() {
                    return vm.items;
                }
            }
        });
        
        addModal.$promise.then(function() {
            addModal.show();
        });
     }
    
      
      
  }
 
  

    
 


 
 
// console.log("asd");