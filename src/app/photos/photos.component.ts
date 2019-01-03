import { Store, select } from '@ngrx/store';
import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { PhotoState } from './store/photos.state';
import * as selectors from './store/photos.selectors';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  @ViewChild('template') tmpModal: TemplateRef<any>;

  modalRef: BsModalRef;
  errorMessage: string;

  constructor(
    private modalService: BsModalService,
    private store: Store<PhotoState>
  ) { }

  ngOnInit(): void {
    this.store.pipe(
      select(selectors.selectPhotosSummary))
      .subscribe(state => {
        if (state && state.error) {
          this.handleError(state.error);
          this.openModal();
        }
      });
  }

  private openModal() {
    this.modalRef = this.modalService.show(this.tmpModal);
  }

  private handleError(error: HttpErrorResponse) {
    this.errorMessage = ' Oops Something went wrong trying to fetch our doggies, please try again!';
  }
}
