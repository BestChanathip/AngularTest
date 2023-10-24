import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaxComponent } from './component/create-tax/create-tax.component';
import { ConfirmTaxComponent } from './component/confirm-tax/confirm-tax.component';
import { FlowGuard } from './shared/flow.guard';

const routes: Routes = [
  {path:'',component:CreateTaxComponent},
  {path:'confirmTax',component:ConfirmTaxComponent, canActivate: [FlowGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
