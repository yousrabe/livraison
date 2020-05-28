var app=angular.module('Sideapp',[]);
    app.controller('Side',function($scope){
      $scope.comments=['this site is awsome','it has planty of benefits'];
        $scope.add = function(){
          $scope.comments.push($scope.comments);
          $scope.comments = "";
        }
    });
    
    app.controller('PanelController',function($scope){
      tab = 1;
      
      $scope.selectTab = function(setTab){
        tab = setTab;
      }

      $scope.isSelected = function(checkTab){
        return tab === checkTab;
      }

    });