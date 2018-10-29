import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeListComponent } from './home-list/home-list.component';
import { AboutusListComponent } from './aboutus-list/aboutus-list.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  {path :'Home', component :HomeListComponent},
  {path :'Aboutus', component:AboutusListComponent},
  {path :'Contact', component :ContactListComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeListComponent,AboutusListComponent,ContactListComponent]
