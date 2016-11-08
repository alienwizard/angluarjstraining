import angular from 'angular';

//get the mock data. On a live site this service would get the json from an api
import data from '../../../data/mock.json'



class RatingsService{
  constructor(){
    this.ratings = data
  }
//get all ratings
  getRatings(){
    return this.ratings;
  }
//sort highest first
sortHighRatings(){

}

//sort low
sortLowRatings(){

}

}

export default angular.module('services.ratings',[])
  .service('ratingsService', RatingsService)
  .name;
