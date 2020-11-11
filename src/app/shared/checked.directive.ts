import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';



@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective implements OnInit {

  constructor(private renderer: Renderer2, private ef: ElementRef) {
  }

  ngOnInit(): void {
    const element = this.ef.nativeElement;
    this.renderer.setStyle(element, 'list-style-image', 'url(/assets/icon-check-small.png)');
  }
}
