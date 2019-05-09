import {NestedTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {Inject} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';

import {MatDialog} from '@angular/material';
import {MatDialogRef} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import {ModelFactoryImpl} from '../view/ModelFactoryImpl';


import {EObject} from 'ecore/EObject';
import {EClass} from 'ecore/EClass';
import {EClassImpl} from 'ecore/EClassImpl';
import {AbstractCollection} from 'ecore/AbstractCollection';
import {OrderedSet} from '../ecore/OrderedSet';
import {EReference} from '../ecore/EReference';

import {View} from '../view/View';
import {ModelPackageImpl} from '../view/ModelPackageImpl';

export interface DialogData {
  options: Array<[EReference, EClass]>;
  selection: EReference;
}





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  treeControl:NestedTreeControl<EObject>;// = new NestedTreeControl<EObject>(this.getChildren);
  dataSource = new MatTreeNestedDataSource<EObject>();
  view:View;

  selection:EObject;

  xxx = '<mat-toolbar>EMF Forms Model</mat-toolbar>';



  constructor(public dialog: MatDialog) {



    this.view = ModelFactoryImpl.eINSTANCE.createView();
    this.view.name = "View myView";

    const control = ModelFactoryImpl.eINSTANCE.createControl()

    control.name = "Control myname";
    this.view.children.add(control);

    this.treeControl = new NestedTreeControl<EObject>(this.getChildren);
    this.dataSource.data = new Array<EObject>();
    this.dataSource.data.push(this.view);

    this.selection = this.view;


  }

  select = (eObject:EObject) => {

    this.selection = eObject;
  }

  getChildren = (self:EObject) => {
    const result = new OrderedSet<EObject>();

    const references = this.getContainments(self);

    for(const ereference of references){

      const child = self.eGet(ereference);

      if(ereference.many){
        result.addAll(child);
      }
      else{
        result.add(child);
      }

    }

    return result;

  }

  getInstaniableEClasses = (eobject:EObject):Array<[EReference, EClass]> => {

    let result = new Array<[EReference, EClass]>();

    let containments = this.getContainments(eobject);

    for(let erference of containments){

      for(let eclassifier of ModelPackageImpl.eINSTANCE.eClassifiers){

        if(eclassifier instanceof EClassImpl){

          let eclass = eclassifier as EClass;

          if(!eclass.abstract){
            if(eclass.eAllSuperTypes.containsX(erference.eType as EClass)){

              result.push([erference, eclass]);
            }
          }

        }

      }
    }
    return result;


  }

  getContainments = (x:EObject):OrderedSet<EReference> =>{

    let result = new OrderedSet<EReference>();

    if(x!==null){

      if(x.eClass!==null){


        for (let ereference of x.eClass().eAllReferences) {
          if((ereference as EReference).containment && !(ereference as EReference).transient){

            result.add((ereference as EReference));
          }
        }
      }


    }



    return result;

  }

  addChild = (self:EObject, feature:EReference) =>{

    let eclass = feature.eType as EClass;

    let child = ModelFactoryImpl.eINSTANCE.create(eclass);

    if(feature.many) {
      let list = self.eGet(feature) as AbstractCollection<any>;

      list.add(child);
      self.eSet(feature, list);

    }
    else{
      self.eSet(feature, child);
    }

  }

  openDialog = (eObject:EObject): void => {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '66%',
      data: {options: this.getInstaniableEClasses(eObject)}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  hasChild = (_: number, node: EObject) => {


    if(node!==null){
      return this.getChildren(node).size() > 0;
    }
    return false;



  }
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'create-dialog.html'
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  select = (ereference:EReference)=>{
    this.data.selection = ereference;
    this.dialogRef.close();
  }

}
