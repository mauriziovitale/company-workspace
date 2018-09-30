import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreLibModule } from '@my-company/core-lib';
import { ProcessListComponent } from './process-list/process-list.component';
@NgModule({
  imports: [CommonModule, CoreLibModule],
  declarations: [ProcessListComponent],
  exports: [ProcessListComponent]
})
export class ProcessLibModule {}
