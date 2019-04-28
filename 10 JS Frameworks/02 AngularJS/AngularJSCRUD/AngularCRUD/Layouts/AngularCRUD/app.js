//App creation  
var app = angular.module("taskApp", []);

//Service
app.service('taskService', ['$http', '$q', function ($http, $q) {

    var formDigest = $('#__REQUESTDIGEST').val();
    //Define the http headers  
    $http.defaults.headers.common.Accept = "application/json;odata=verbose";
    $http.defaults.headers.post['Content-Type'] = 'application/json;odata=verbose';
    $http.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
    $http.defaults.headers.post['If-Match'] = "*";
    $http.defaults.headers.post['X-RequestDigest'] = formDigest;

    //Get the tasks  
    this.getTasks = function (listTitle) {
        var dfd = $q.defer();
        $http.defaults.headers.post['X-HTTP-Method'] = "";
        var query = "?$select=Title,Status,Priority,ID,Body";
        var restUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('" + listTitle + "')/items" + query;
        $http.get(restUrl).success(function (data) {
            dfd.resolve(data.d.results);
        }).error(function (data) {
            dfd.reject("error getting tasks");
        });
        return dfd.promise;
    }
    //Create a task , for now static text, we can pass input fields to add apropriate value   
    this.addTask = function (listTitle) {
        var dfd = $q.defer();
        $http.defaults.headers.post['X-HTTP-Method'] = "";
        var restUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('" + listTitle + "')/items";
        $http.post(restUrl, {
            __metadata: {
                type: "SP.List"
            },
            Title: "New Tasks"
        }).success(function (data) {
            //resolve the new data  
            dfd.resolve(data.d);
        }).error(function (data) {
            dfd.reject("failed to add task");
        });
        return dfd.promise;
    }
    //Update a task  
    this.updateTask = function (listTitle, task) {
        var dfd = $q.defer();
        $http.defaults.headers.post['X-HTTP-Method'] = "MERGE";
        var restUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('" + listTitle + "')/items(" + task.ID + ")";
        $http.post(restUrl, {
            __metadata: {
                type: "SP.List"
            },
            Title: task.Title
        }).success(function (data) {
            //resolve something  
            dfd.resolve(true);
        }).error(function (data) {
            dfd.reject("error updating task");
        });
        return dfd.promise;
    }
    //Delete a task  
    this.deleteTask = function (listTitle, task) {
        var dfd = $q.defer();
        $http.defaults.headers.post['X-HTTP-Method'] = "DELETE";
        var restUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('" + listTitle + "')/items(" + task.ID + ")";
        $http.post(restUrl)
          .success(function (data) {
              //resolve something  
              dfd.resolve(true);
          }).error(function (data) {
              dfd.reject("error deleting task");
          });
        return dfd.promise;
    }
}]);

//Controller
app.controller('spTasksController', function ($scope, $http, taskService) {

    $scope.editing = false;

    //example populating tasks  
    taskService.getTasks("Tasks").then(function (result) {
        $scope.tasks = result;
    });

    //example to add task  
    $scope.addTask = function (listName) {
        taskService.addTask(listName).then(function (result) {
            //update the scope with new task created  
            $scope.tasks.push(result);
            $scope.task = {};
            $scope.$apply();
        });
    };
    // example to update task  
    $scope.updateTask = function (listName, item) {
        taskService.updateTask(listName, item).then(function (result) {
            $scope.editing = $scope.tasks.indexOf(item);
            $scope.$apply();
        });
    };

    $scope.editItem = function (index) {
        $scope.editing = $scope.tasks.indexOf(index);
    }
    $scope.saveField = function (index) {
        if ($scope.editing !== false) {
            $scope.editing = false;
        }
    };
    // example to delete task  
    $scope.deleteTask = function (listName, item, index) {
        taskService.deleteTask(listName, item).then(function (result) {
            $scope.tasks.splice(index, 1);
            $scope.$apply();
        });
    };
});