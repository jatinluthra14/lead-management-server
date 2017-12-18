angular.module('patternfly.navigation').controller('vertNavController', ['$scope',
  function ($scope) {
    $scope.navigations = [
            {
              title: "GCI",
              iconClass: "fa fa-user",
              href: "/gci"             
            },
            {
              title: "Jboss-Outreach",
              iconClass : "fa fa-user",
              href: "/jboss"
            },
			{
              title: "Lead-Management",
              iconClass : "fa fa-user",
              href: "/lead"
            }
          ];

  }
]);