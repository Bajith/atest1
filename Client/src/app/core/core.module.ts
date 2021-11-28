import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {BreadcrumbModule} from 'xng-breadcrumb';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { SharedModule } from '../shared/shared.module';
import { TaskBarComponent } from './task-bar/task-bar.component';

@NgModule({
  declarations: [SectionHeaderComponent, TaskBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    BreadcrumbModule,
    SharedModule
  ],
  exports: [SectionHeaderComponent, TaskBarComponent]
})
export class CoreModule { }