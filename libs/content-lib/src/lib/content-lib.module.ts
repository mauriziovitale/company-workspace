import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreLibModule } from '@my-company/core-lib';
import { ContentListComponent } from './content-list/content-list.component';
@NgModule({
  imports: [CommonModule, CoreLibModule],
  declarations: [ContentListComponent],
  exports: [ContentListComponent]
})
export class ContentLibModule {}
