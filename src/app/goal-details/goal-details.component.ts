import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Goal } from '../goals';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GoalsService } from '../goal-service/goals.service';

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {

  goal: Goal;

  constructor(private route:ActivatedRoute, private service:GoalsService) { }

  ngOnInit() {
    let id= this.route.snapshot.paramMap.get('id');
    this.goal = this.service.getGoal(id)
  }

}
