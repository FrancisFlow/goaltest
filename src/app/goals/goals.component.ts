import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../goal-service/goals.service';
import { Goal } from '../goals';
import { AlertService } from '../alert-service/alert.service';
import { Quote } from '../quote-class/quote';
import { HttpClient } from '@angular/common/http';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
// 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

export class GoalsComponent implements OnInit {
  goals:Goal[];
  alertService:AlertService;
  quote:Quote;

  // goalsService
   constructor(goalService:GoalsService, alertService:AlertService, private quoteService:QuoteRequestService, private router:Router){
     this.goals= goalService.getGoals();
     this.alertService = alertService;

   }

//

goToUrl(id){
  this.router.navigate(['/goals', id])
}

  toggleDetails(index: number) {
    this.goals[index].showdescription=!this.goals[index].showdescription;
  }


  // Function to remove a goal from the view by splicing. Requires user confirmation

  deleteGoal(index:number) {
      let okDelete= confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if(okDelete) {
      this.goals.splice(index, 1)
      this.alertService.makeAlert("This goal has been deleted");
    }
  }

// Function to add the newGoals to goals array
  

  addNewGoal(goal) {
    let goalLength= this.goals.length;
    goal.id= goalLength+1
    goal.aDate=new Date(goal.aDate)
    this.goals.push(goal)
  }


  ngOnInit() {
    this.quoteService.quoteRequest()
    this.quote= this.quoteService.quote

  }

}
