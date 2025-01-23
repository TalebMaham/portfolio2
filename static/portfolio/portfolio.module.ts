import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'project/details/:id', component: ProjectDetailsComponent }
];

@NgModule({
  declarations: [
    AboutComponent,
    ProjectComponent,
    ContactComponent,
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // Déclare les routes enfants
    FormsModule,
  ],
  exports: [RouterModule] // Permet de partager les routes
})
export class PortfolioModule {}
