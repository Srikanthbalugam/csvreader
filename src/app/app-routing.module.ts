import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { AppComponent } from './app.component';


const routes: Routes = [{
  path:'',component:AppComponent
},
{path:'table',component:TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
