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
import {AbstractCollection} from 'ecore/AbstractCollection';
import {OrderedSet} from '../ecore/OrderedSet';
import {EReference} from '../ecore/EReference';

import {View} from '../view/View';

export interface DialogData {
  options: OrderedSet<EReference>;
  selection: EReference;
}


/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}



const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussel sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  treeControl:NestedTreeControl<EObject>;// = new NestedTreeControl<EObject>(this.getChildren);
  dataSource = new MatTreeNestedDataSource<EObject>();
  view:View;



  constructor(public dialog: MatDialog) {



    this.view = ModelFactoryImpl.eINSTANCE.createView();

    const control = ModelFactoryImpl.eINSTANCE.createControl()

    control.name = "Control myname";
    this.view.children.add(control);

    this.treeControl = new NestedTreeControl<EObject>(this.getChildren);
    this.dataSource.data = this.view.children;

  }

  getChildren = (self:EObject) => {
    const result = new OrderedSet<EObject>();

    const references = this.getContainments(self);

    for(const ereference of references){

      const child = self.eGet(ereference);
      result.add(child);
    }

    return result;

  }

  getContainments = (self:EObject):OrderedSet<EReference> =>{

    let result = new OrderedSet<EReference>();
    for (let ereference of self.eClass().eAllReferences) {
      if((ereference as EReference).containment){

        result.add((ereference as EReference));
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
      data: {options: this.getContainments(eObject)}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
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
