import { Injectable } from '@angular/core';

// import the class
import { goals } from '../goalList';
import { Goal } from '../goals';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  // create a function to return the goals
  goal:Goal;
 
  getGoals(){
    return goals
  }

  getGoal(id){
    for(let goal of goals){
      if(goal.id == id) {
        return goal;
      }

    }
  }
  // if statement means it will need an else statement
  constructor() { }
}
