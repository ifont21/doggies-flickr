import { PhotoState } from './../../photos/store/photos.state';
import { Store } from '@ngrx/store';
import * as actions from '../../photos/store/photos.actions';
import {
  Directive,
  ElementRef,
  HostListener,
  Output,
  EventEmitter,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[appVirtualScroll]'
})
export class VirtualScrollDirective implements OnInit, OnChanges {

  @Input()
  percentageScroll = 80;

  @Input()
  payload: any;

  @Output()
  update = new EventEmitter<boolean>();

  private _percentValue = 0;

  constructor(
    private _el: ElementRef,
    private store: Store<PhotoState>
  ) { }

  ngOnInit(): void {


  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  @HostListener('scroll', ['$event'])
  onScroll(event: UIEvent) {
    const percent = Math.round(
      (event.srcElement.scrollTop /
        (event.srcElement.scrollHeight -
          event.srcElement.clientHeight)) * 100
    );
    this._percentValue = this._percentValue !== percent ? percent : this._percentValue;
    if (this._percentValue === this.percentageScroll) {
      this.store.dispatch(actions.fetchMorePhotosSummary(this.payload));
    }
  }

}
