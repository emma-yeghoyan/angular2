import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit {

  @Input('appTest')
  delay: number = 1000;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private tmpRef: TemplateRef<any>
  ) { }

  ngOnInit(): void{
     setTimeout(() => {
        this.viewContainerRef.createEmbeddedView(this.tmpRef)
     },this.delay) 
  }

}
