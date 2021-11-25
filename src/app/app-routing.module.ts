import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalsComponent } from './goals/goals.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GoalDetailsComponent} from './goal-details/goal-details.component';


const routes: Routes = [


  {path:'goals', component:GoalsComponent},
  {path:'about', component:AboutComponent},

  {path: "", pathMatch:"full", redirectTo:"goals"},

  {path:'goals/:id', component: GoalDetailsComponent},
  {path:'**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
