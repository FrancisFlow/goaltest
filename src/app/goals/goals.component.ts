import { Component, OnInit } from '@angular/core';
import { Goal } from '../goals';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
// 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
export class GoalsComponent implements OnInit {
  goals:Goal[]=[
    new Goal(1, 'Find the spark that will shape you future', 'What is you why?', new Date(2022, 3, 3)),
    new Goal(2, 'Teach what you have learned', 'Pass on the knowledge that you have gained', new Date(2020,3,14)),
    new Goal(3, 'Gain a vital skill to the economy', 'Computer programing is a great place to start', new Date(2020,3,14)),
    new Goal(4, 'Create your first company', 'Offer the best to the best and the best for the best', new Date(2020,3,14)),
    new Goal(5, 'Go a nd visit Japan', 'Get immersed in the cultural wonders', new Date(2020,3,14)),
    new Goal(6, 'Create a future to inspire','Leave a lasting legacy', new Date(2020,3,14))

  ];

  toggleDetails(index: number) {
    this.goals[index].showdescription=!this.goals[index].showdescription;
  }


  // Function to remove a goal from the view by splicing. Requires user confirmation

  toDelete(isComplete:boolean, index:number) {
    if(isComplete){
      let okDelete= confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if(okDelete) {
      this.goals.splice(index, 1)
    }
  }
  }

// Function to add the newGoals to goals array
  

  addNewGoal(goal) {
    let goalLength= this.goals.length;
    goal.id= goalLength+1
    goal.aDate=new Date(goal.aDate)
    this.goals.push(goal)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
