import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  // @HostBinding('class') cssClassName: string;
  // toggle = false;

  @HostBinding('class.open') toggle = false;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.cssClassName = 'btn-group';
  }

  @HostListener('click') click(eventData: Event) {
    console.log('clicked');
    this.toggle = !this.toggle;
    console.log(this.toggle);

    // works
    // this.cssClassName = this.toggle ? 'btn-group open' : 'btn-group';

    // works
    // if(this.toggle)
    //   this.renderer.addClass(this.elRef.nativeElement, 'open');
    // else
    //   this.renderer.removeClass(this.elRef.nativeElement, 'open');

  }



}
