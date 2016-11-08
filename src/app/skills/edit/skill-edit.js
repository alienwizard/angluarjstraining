export default angular.module('skills.edit',[
  'skillsApp.models.skills'
])
  .config(function($stateProvider){
    $stateProvider
        .state('skillsapp.skills.edit', {
          'url': 'skills/:skillId/edit',
          views: {
            'edit@skillsapp.skills':{
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
        //Copy in memory for backup
        $scope.editedSkill = angular.copy($scope.skill);
      }else{
        returnToSkillState();
      }
    })

    function toggleEditing(){

      $scope.isEditing = !$scope.isEditing;
    }
    function updateSkill() {
      $scope.skill = angular.copy($scope.editedSkill);
      skills.updateSkill($scope.editedSkill);
      returnToSkillState();

    }
    function cancelEditing(){
      $scope.isEditing = false;
      returnToSkillState();
    }

    $scope.toggleEditing = toggleEditing;
    $scope.cancelEditing = cancelEditing;
    $scope.updateSkill = updateSkill;

  })
  .name
