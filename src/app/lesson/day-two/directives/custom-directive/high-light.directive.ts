import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective {
  constructor(private ele: ElementRef, private render2: Renderer2) {}

  @HostBinding('style.backgroundColor') bgColor = 'aqua';

  @HostListener('mouseenter') eventHover(): void {
    // this.ele.nativeElement.style.backgroundColor = 'yellow';
    // const divChild = this.render2.createElement('div');
    // this.render2.setStyle(divChild, 'background-color', 'red');
    // this.render2.setStyle(divChild, 'height', '30px');
    // this.render2.appendChild(this.ele.nativeElement, divChild);
    this.render2.setStyle(this.ele.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseleave') eventLeave(): void {
    this.ele.nativeElement.style.backgroundColor = 'blue';
    // this.render2.setStyle(this.ele.nativeElement, 'background-color', 'blue')
  }
}
