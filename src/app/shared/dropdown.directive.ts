import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[addDropdown]"
})
export class DropdownDirective{

  @HostBinding('class.open') isOpen = false;

  //listening to the click event
  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }

  constructor(){
    
  }
}