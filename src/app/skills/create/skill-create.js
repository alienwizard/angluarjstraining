export default angular.module('skills.create', [
  'skillsApp.models.skills'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('skillsapp.skills.create', {
        url: 'skills/create',
        views: {
          'create@skillsapp.skills': {
            templateUrl: 'src/app/skills/create/skill-create.tmpl.html',
            controller: 'CreateSkillCtrl'
          }
        }
      })
      ;
    })
    .controller('CreateSkillCtrl', function ($scope, $stateParams, skills, $state ){
      $scope.isCreating = false;

      function toggleCreating(){
        $scope.isCreating = !$scope.isCreating;
      }

      function stopCreating(){
        $scope.isCreating = false;
        $state.go('skillsapp.skills', {

        })
      }

      function createSkill(){
        skills.createSkill($scope.newSkill);
        console.log($scope.newSkill);
        stopCreating();
      }
      function resetForm() {
        $scope.newSkill = {
          'name': '',
          'level': '',
          'id': ''

        };
      }
      $scope.toggleCreating = toggleCreating;
      $scope.stopCreating = stopCreating;
      $scope.createSkill = createSkill;

      resetForm();
      toggleCreating();
    })
    .name
