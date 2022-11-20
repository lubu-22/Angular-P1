import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployesInformationComponent } from './components/employes-information/employes-information.component';

const routes: Routes = [
  {path:'', component:EmployesInformationComponent },
  {path:'employe-info',redirectTo:'', pathMatch:'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
