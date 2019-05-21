//source: https://github.com/DenysVuika/ng2-dynamic-content/blob/master/app/runtime-content.component.ts

import {
  Component, Input,
  ViewChild, ViewContainerRef, ComponentRef,
  Compiler, ComponentFactory, NgModule, ModuleWithComponentFactories, ComponentFactoryResolver, OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {HtmlsourceService} from "./htmlsource.service";

@Component({
  selector: 'runtime-content',
  template: `
    <div>
      <div #container></div>
    </div>
    `
})
export class RuntimeContentComponent implements OnInit{



  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  template : string = "";

  private componentRef: ComponentRef<{}>;



  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private compiler: Compiler,
    private htmlsourceService: HtmlsourceService
  ) {




  }

  ngOnInit(){
    this.htmlsourceService.source.subscribe(value =>{



      console.log("receive 2");
      console.log(value);
      this.template = value;
      this.compileTemplate();
    })
  }

  compileTemplate() {



    let metadata = {
      selector: `runtime-component-sample`,
      template: this.template
    };

    let factory = this.createComponentFactorySync(this.compiler, metadata, null);

    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
    this.componentRef = this.container.createComponent(factory);
  }

  private createComponentFactorySync(compiler: Compiler, metadata: Component, componentClass: any): ComponentFactory<any> {
    const cmpClass = componentClass || class RuntimeComponent { name: string = 'Denys' };
    const decoratedCmp = Component(metadata)(cmpClass);
    console.log(metadata);

    @NgModule(
      { imports: [CommonModule, MatToolbarModule, MatSlideToggleModule, MatInputModule],
        declarations: [decoratedCmp] })
    class RuntimeComponentModule { }

    let module: ModuleWithComponentFactories<any> = compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
    return module.componentFactories.find(f => f.componentType === decoratedCmp);
  }

}
