import {Directive,ElementRef,OnInit} from '@angular/core'
@Directive({
selector:'[highlight]'
})
export class HighLightDirective implements OnInit {
    constructor(private elementRef:ElementRef) {
        
    }
    ngOnInit(){
        debugger
        this.elementRef.nativeElement.style.color='red';
    }
}