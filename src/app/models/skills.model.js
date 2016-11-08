

export default angular.module('skillsApp.models.skills', [

])
  .service('skills', function SkillsService($http, $q){
    var URLS = {
      FETCH: 'src/data/skills.json'
    },
    skills,
    currentSkill,
    skillsModel = this;

    function extract(result) {
      return result.data;
    }

    function cacheSkills(result) {
      skills = extract(result);
      return skills;
    }

    skillsModel.getSkills = function() {
      return (skills) ? $q.when(skills) : $http.get(URLS.FETCH).then(cacheSkills);
    };

    function findSkill(skillId)  {
      return _.find(skills, function(skill){
      return skill.id === parseInt(skillId, 10);
      });
    }


    skillsModel.getSkillById = function (skillId) {
      var deferred = $q.defer();
      if(skills) {
        deferred.resolve(findSkill(skillId))
      } else {
        skillsModel.getSkill().then(function () {
          deferred.resolve(findSkill(skillId))
        })
      }
      return deferred.promise;
    }

    skillsModel.createSkill = function (skill){
      skill.id = skills.length;
      skills.push (skill);
    }

    skillsModel.stopCreating = function() {

    }

    skillsModel.updateSkill = function (skill){
      console.log(skill);
      var index = _.findIndex(skills, function (b) {
        return b.id == skill.id
      });

      skills[index] = skill;
    }

    skillsModel.deleteSkill = function (skill) {
      _.remove(skills, function(b) {
        return b.id == skill.id;
      })
    }
  })
  .name
