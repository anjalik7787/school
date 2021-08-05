import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFeeComponent } from './add-fee/add-fee.component';
import { FeeCollectionComponent } from './fee-collection/fee-collection.component';



@NgModule({
  declarations: [AddFeeComponent, FeeCollectionComponent],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
