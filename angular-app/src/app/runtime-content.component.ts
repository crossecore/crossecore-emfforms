//source: https://github.com/DenysVuika/ng2-dynamic-content/blob/master/app/runtime-content.component.ts

import {
  Component,
  ViewChild, ViewContainerRef, ComponentRef,
  Compiler, ComponentFactory, NgModule, ModuleWithComponentFactories, ComponentFactoryResolver
} from '@angular/core';

import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material';

@Component({
  selector: 'runtime-content',
  template: `
        <div>
            <button (click)="compileTemplate()">Compile</button>
            <h3>Output</h3>
            <div #container></div>
        </div>
    `
})
export class RuntimeContentComponent {

  template: string = "<mat-toolbar>EMF Forms Model</mat-toolbar>";

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  private componentRef: ComponentRef<{}>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private compiler: Compiler) {
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
    console.log(cmpClass);

    @NgModule(
      { imports: [CommonModule, MatToolbarModule],
        declarations: [decoratedCmp] })
    class RuntimeComponentModule { }

    let module: ModuleWithComponentFactories<any> = compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
    return module.componentFactories.find(f => f.componentType === decoratedCmp);
  }

}
