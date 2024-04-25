import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPageTitle]'
})
export class PageTitleDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.setAttribute('style', 'color:#fff;background-color:#343a40; font-size:20px; padding:15px; border-radius:10px; margin-bottom:20px');
  }

}
