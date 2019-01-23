import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudent } from '../app/createPage/create.component';
import { ShowAll } from '../app/listPage/list.component';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


const routes: Routes = [{ path: 'create', component: CreateStudent },
{ path: 'show-all', component: ShowAll },
{ path: '', redirectTo: '/create', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, CommonModule],
  exports: [RouterModule],
  declarations: [CreateStudent, ShowAll]
})
export class AppRoutingModule { }
