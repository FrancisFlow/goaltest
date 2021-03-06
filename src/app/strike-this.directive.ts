import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikeThis]'
})
export class StrikeThisDirective {

  constructor(private elem:ElementRef) { 
  }

  @HostListener("click") onClicks(){
    this.textDeco('underline')
  }
  @HostListener('dblclick') onDoubleClicks(){
    this.textDeco('none')
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }

}
