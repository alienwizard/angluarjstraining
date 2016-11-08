export default angular.module('skills.edit',[
  'skillsApp.models.skills'

])
  .config(function($stateProvider){
    $stateProvider
        .state('skillsapp.skills.edit', {
          'url': '/skills/:skillId/edit',
          views: {
            '@skillsapp.skills':{
          templateUrl: 'src/app/skills/edit/skill-edit.tmpl.html',
          controller: 'EditSkillCtrl'
        }
      }
    })
    ;
  })

  .controller('EditSkillCtrl', function ($scope, skills, $stateParams, $state){
    $scope.isEditing = false;

    function returnToSkillState(){
      $state.go('skillsapp.skills')
    }

    skills.getSkillById($stateParams.skillId).then(function (skill){
      if(skill) {
        $scope.isEditing = true;
        $scope.skill = skill;
        $scope.editedSkill = angular.copy($scope.bookmart);
      }else{
        returnToSkillState();
      }
    })

    function toggleEditing(){
      $scope.isEditing = !$scope.isEditing;
    }
    function updateSkill() {

    }
    function cancelEditing(){

    }
  })
  .name
