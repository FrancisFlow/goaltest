import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goals';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {


      // AddGoal, the event to be emitted to the parent component
  @Output() addGoal= new EventEmitter<Goal>();

  // Function to emit the event on click
  
    addThisGoal() {
      this.addGoal.emit(this.newGoal)
      this.newGoal= new Goal(0, "", "", new Date())
    }

  newGoal= new Goal(0, "", "", new Date());

  constructor() { }

  ngOnInit(): void {
  }

}
