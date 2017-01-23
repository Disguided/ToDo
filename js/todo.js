var app = angular.module('ToDoL', []); 


          app.controller('todoCtrl', function($scope, $http) {
           $scope.todo = {};
           $scope.todoList = [{todoText:'eat', done:false}, {todoText:'sleep', done:false},{todoText:'code', done:true}];
           console.log($scope.todoList);

          $scope.todoAdd = function() {

         $scope.todoList.push({todoText:$scope.todo.todoInput, done:false});
         $scope.todoInput = "";
    
         var data = $.param({
            value : $scope.todo.todoInput
          });
        
        $scope.config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

         $http.post('http://localhost/todoApp/ajaxCalls/insert_data.php', data, $scope.config)
            .success(function (data, status, headers, config) {

            })
            .error(function (data, status, header, config) {
            });

          };

          

         var oldList = $scope.todoList;
        

        $scope.remove = function() {
             $scope.todoList = [];
            
             angular.forEach(oldList, function(x) {
                  //console.log(x);

                     
                  if (!x.done){
                     $scope.todoList.push(x);
                  }
                  else
                  {
                     var data = $.param({
                          value_to_delete : x.todoText
                        });

                      $scope.config = {
                          headers : {
                              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                          }
                      }

                      $http.post('http://localhost/todoApp/ajaxCalls/delete_data.php', data, $scope.config)
                      .success(function (data, status, headers, config) {

                      })
                      .error(function (data, status, header, config) {
                      });

                  }

                  
             
          });

             console.log( $scope.todoList );
        };
         
         $scope.udpate = function() ;
                  {
                     var data = $.param({
                          value_to_update : x.todoText
                        });

                      $scope.config = {
                          headers : {
                              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                          }
                      }

                      $http.post('http://localhost/todoApp/ajaxCalls/update_data.php', data, $scope.config)
                      .success(function (data, status, headers, config) {

                      })
                      .error(function (data, status, header, config) {
                      });

                  }
          });

          };
});



