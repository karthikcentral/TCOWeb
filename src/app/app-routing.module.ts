import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientComponent } from './components/client/client.component';
import { JdaComponent } from './components/jda/jda.component';
import { OutputComponent } from './components/output/output.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    children : [
      {
        path : '', 
        component :ClientComponent
      },
      {
        path : 'jda', 
        component :JdaComponent
      },
      {
        path : 'output', 
        component :OutputComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
