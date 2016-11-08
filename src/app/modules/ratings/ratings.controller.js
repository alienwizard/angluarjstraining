export default class RatingsController{
  constructor(RatingsService){
    this.level = 0;
    this.name = "";
    this.cat = "none";
    this.skills = RatingsService;
    console.log(this.skills);
  }

//increment the level variable
  voteUp(){

  }

//decrease the level of a skill
  votedown(){

  }

  //Get the current selected skill level
  isCurrentSkillLevel(){

  }

//Delete the skill, remove from array and update db
  delete(){

  }


}


RatingsController.$inject = ['RatingsService'];
