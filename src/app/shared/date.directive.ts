import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input()
  private date: Date;
  private paragraph; //<p>

  constructor(private renderer: Renderer2, private ef: ElementRef) {
  this.paragraph = this.renderer.createElement('p');
  }

  @HostListener('mouseenter')
  mouseEnter(eventDate: Event): void {
    this.paragraph.innerHTML = this.date.toLocaleString()
    this.renderer.appendChild(this.ef.nativeElement ,this.paragraph)
  }

  @HostListener('mouseleave')
  mouseLeave(eventDate: Event): void {
    this.renderer.removeChild(this.ef.nativeElement ,this.paragraph)
  }
}
