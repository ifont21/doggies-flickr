import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerLoaderComponent } from './components/spinner-loader/spinner-loader.component';
import { VirtualScrollDirective } from './directives/virtual-scroll.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SpinnerLoaderComponent,
    VirtualScrollDirective
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    SpinnerLoaderComponent,
    VirtualScrollDirective
  ]
})
export class SharedModule { }
