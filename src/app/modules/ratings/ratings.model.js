angular.module('skills.models', [

])
  .service('categories', function SkillsService($http, $q) {
    var URLS = {
      FETCH: '../../data/mock.json'
    },
    skills,
    currentLevel,
    skillsModel = this;

    function extract(result) {
      return result.data;
    }

    function cacheCategories(result) {
      skills = extrackt(result);
      return skills;
    }

    skillsModel.getSkills = function () {
      return currentLevel;
    }
  })
