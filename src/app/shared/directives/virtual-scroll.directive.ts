import {
  Directive,
  HostListener,
  Output,
  EventEmitter,
  Input
} from '@angular/core';

@Directive({
  selector: '[appVirtualScroll]'
})
export class VirtualScrollDirective {

  @Input()
  percentageScroll = 97;

  @Input()
  payload: any;

  @Output()
  update = new EventEmitter<boolean>();

  private _percentValue = 0;

  constructor() { }

  @HostListener('scroll', ['$event'])
  onScroll(event: UIEvent) {
    const percent = Math.round(
      (event.srcElement.scrollTop /
        (event.srcElement.scrollHeight -
          event.srcElement.clientHeight)) * 100
    );
    this._percentValue = this._percentValue !== percent ? percent : this._percentValue;
    if (this._percentValue === this.percentageScroll) {
      this.update.emit(true);
    }
  }

}
