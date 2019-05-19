import {NestedTreeControl} from '@angular/cdk/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {Inject, Injectable} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {BehaviorSubject} from 'rxjs';

import {MatDialog} from '@angular/material';
import {MatDialogRef} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import {ModelFactoryImpl} from '../model/ModelFactoryImpl';



import {EObject} from 'ecore/EObject';
import {EClass} from 'ecore/EClass';
import {BasicEObjectImpl} from 'ecore/BasicEObjectImpl';
import {EClassImpl} from 'ecore/EClassImpl';
import {AbstractCollection} from 'ecore/AbstractCollection';
import {OrderedSet} from '../ecore/OrderedSet';
import {EReference} from '../ecore/EReference';

import {View} from '../model/View';
import {ModelPackageImpl} from '../model/ModelPackageImpl';
import {LabelPackageImpl} from '../label/LabelPackageImpl';
import {EAttribute} from '../ecore/EAttribute';
import {EPackage} from '../ecore/EPackage';
import {LabelFactoryImpl} from '../label/LabelFactoryImpl';
import {ModelPackageLiterals} from '../model/ModelPackageLiterals';
import {XmiResource} from '../ecore/XmiResource';
import {JsonResource} from '../ecore/JsonResource';
import {EStructuralFeature} from '../ecore/EStructuralFeature';
import {EReferenceImpl} from '../ecore/EReferenceImpl';
import {EAttributeImpl} from '../ecore/EAttributeImpl';
import {EcorePackageImpl} from '../ecore';
import {EcoreFactoryImpl} from '../ecore/EcoreFactoryImpl';
import {EPackageImpl} from '../ecore/EPackageImpl';
import {ModelSwitch} from '../model/ModelSwitch';
import {Control} from '../model/Control';
import {FeaturePathDomainModelReference} from '../model/FeaturePathDomainModelReference';
import {FeaturePathDomainModelReferenceImpl} from '../model/FeaturePathDomainModelReferenceImpl';


export interface DialogData {
  options: Array<[EReference, EClass]>;
  option: [EReference, EClass];
  blabla: EObject;
}

export interface DialogData2 {

  eclass: EClass;
}



/** Flat to-do item node with expandable and level information */
export class TodoItemFlatNode {
  item: EObject;
  level: number;
  expandable: boolean;
}

@Injectable()
export class ChecklistDatabase {
  dataChange = new BehaviorSubject<EObject[]>([]);

  get data(): EObject[] {

    return this.dataChange.value;
  }

  constructor() {
    this.initialize();
  }

  initialize() {

    //FIXME this should be done inside *PackageImpl (is deactivated because of circular dependency)
    ModelPackageImpl.eINSTANCE.eFactoryInstance = ModelFactoryImpl.eINSTANCE;
    LabelPackageImpl.eINSTANCE.eFactoryInstance = LabelFactoryImpl.eINSTANCE;


    let view = ModelFactoryImpl.eINSTANCE.createView();
    view.name = "myView";
    view.visible = true;

    const control = ModelFactoryImpl.eINSTANCE.createControl();

    control.name = "control";


    view.children.add(control);

    // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
    //     file node as children.
    const data = new Array<EObject>();
    data.push(view);

    // Notify the change.
    this.dataChange.next(data);
  }

  removeItem(eobject:EObject){

    //TODO eContainer

    let container = (eobject as BasicEObjectImpl).eInternalContainer();



    for(let feature of container.eClass().eAllReferences){
      //TODO reuse getContainments
      if(feature.containment){

        if(feature.many){
          let list = new OrderedSet<EObject>();
          list.addAll(container.eGet(feature));
          if(list.containsX(eobject)){
            list.remove(eobject);
            container.eSet(feature, list);
          }

        }
        else{

          if(container.eGet(feature)===eobject){
            container.eSet(feature, null);
          }
        }
      }
    }

    this.dataChange.next(this.data);

  }

  /** Add an item to to-do list */
  insertItem(container: EObject, feature: EReference, eclass:EClass) {


      const ePackage = eclass.ePackage;
      const child = ePackage.eFactoryInstance.create(eclass);
      //child.eSet(ModelPackageLiterals.ELEMENT_NAME, "some dame");

      if(feature.many) {
        let list = new OrderedSet<EObject>();
        list.addAll(container.eGet(feature) as AbstractCollection<EObject>);
        list.add(child);
        container.eSet(feature, list);

      }
      else{
        container.eSet(feature, child);
      }

      this.dataChange.next(this.data);
  }


}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChecklistDatabase]
})
export class AppComponent {


  flatNodeMap = new Map<TodoItemFlatNode, EObject>();
  nestedNodeMap = new Map<EObject, TodoItemFlatNode>();

  treeControl: FlatTreeControl<TodoItemFlatNode>;
  treeFlattener: MatTreeFlattener<EObject, TodoItemFlatNode>;
  dataSource: MatTreeFlatDataSource<EObject, TodoItemFlatNode>;

  selection: EObject = this.database.data[0];

  attributes : Array<EStructuralFeature> = [];

  template : string = "<mat-toolbar>EMF Forms Model</mat-toolbar>";



  /*
  treeControl:NestedTreeControl<EObject>;// = new NestedTreeControl<EObject>(this.getChildren);
  dataSource = new MatTreeNestedDataSource<EObject>();
  //view:View;

  dataChange = new BehaviorSubject<EObject>(null);
  get data(): EObject { return this.dataChange.value; }



  */
  constructor(public dialog: MatDialog, private database: ChecklistDatabase) {


    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    database.dataChange.subscribe(data => {

      this.dataSource.data = data;

      //TODO TreeIterator


      console.log(data);

      this.template = "";

      for(let control of (data[0] as View).children){
        this.template += new AngularRenderer().doSwitch(control);
      }




    });

    this.select(this.selection);


    /*
    //FIXME this should be done inside *PackageImpl (is deactivated because of circular dependency)
    ModelPackageImpl.eINSTANCE.eFactoryInstance = ModelFactoryImpl.eINSTANCE;
    LabelPackageImpl.eINSTANCE.eFactoryInstance = LabelFactoryImpl.eINSTANCE;

    let view = ModelFactoryImpl.eINSTANCE.createView();
    view.name = "View myView";
    view.visible = true;

    const control = ModelFactoryImpl.eINSTANCE.createControl()

    control.name = "Control myname";
    view.children.add(control);

    this.treeControl = new NestedTreeControl<EObject>(this.getChildren);
    this.dataChange.next(view);
    this.selection = view;


    this.dataChange.subscribe(data => {
      const data_ = new Array<EObject>();
      data_.push(data);
      this.dataSource.data = data_;
    });

    */


  }

  getLevel = (node: TodoItemFlatNode) => node.level;

  isExpandable = (node: TodoItemFlatNode) => node.expandable;

  getChildren = (node: EObject): EObject[] => {



    let result = new Array<EObject>();

    for(let eobject of node.eContents() as Array<EObject>){
      if(eobject!==null){
        result.push(eobject);
      }
    }


    return result;
  }

  hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.item === null;

  transformer = (node: EObject, level: number) => {


    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.item === node
      ? existingNode
      : new TodoItemFlatNode();
    flatNode.item = node;
    flatNode.level = level;



    flatNode.expandable = node===null ? false: (node.eContents() as Array<EObject>).length>0;

    console.log(node.eContents());

    console.log(flatNode);
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }






  save = (event:any, eAttribute:EAttribute) => {
    this.selection.eSet(eAttribute, event.target.value);
    this.database.dataChange.next(this.database.data);

  }

  saveSlider = (event:any, eAttribute:EAttribute) => {


    this.selection.eSet(eAttribute, event.checked);
    this.database.dataChange.next(this.database.data);
  }

  select = (eObject:EObject) => {

    this.selection = eObject;

    this.attributes = [];

    for(let feature of eObject.eClass().eAllStructuralFeatures){

      if(feature instanceof EAttributeImpl){

        const attribute = feature as EAttribute;

        console.log(attribute);
        this.attributes.push(attribute);

      }
    }

  }



  getChildren2 = (self:EObject) => {
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

  export = () => {

    const json = new JsonResource(ModelPackageImpl.eINSTANCE, ModelFactoryImpl.eINSTANCE).asJson(this.database.data[0]);

    const str = JSON.stringify(json);

    const element = document.createElement('a');
    const datalink = 'data:text/json;base64,' + btoa(str);

    element.setAttribute('href', datalink);
    element.setAttribute('download', "export.json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);




  }

  getInstaniableEClasses = (eobject:EObject):Array<[EReference, EClass]> => {

    let result = new Array<[EReference, EClass]>();

    let containments = this.getContainments(eobject);

    let epackages = new OrderedSet<EPackage>();
    epackages.add(ModelPackageImpl.eINSTANCE);
    epackages.add(LabelPackageImpl.eINSTANCE);


    for(let erference of containments){

      for(let epackage of epackages){


        for(let eclassifier of epackage.eClassifiers){

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

  remove = (eobject:EObject)=>{
    this.database.removeItem(eobject);
  }


  openDialog = (eObject:EObject): void => {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '66%',
      data: {options: this.getInstaniableEClasses(eObject), blabla: eObject}
    });

    dialogRef.afterClosed().subscribe(datalogdata => {

      const ereference = datalogdata.option[0] as EReference;
      const eclass = datalogdata.option[1] as EClass;
      const container = datalogdata.blabla;

      //const node = this.nestedNodeMap.get(container);

      this.database.insertItem(container, ereference, eclass);
      /*
      console.log(datalogdata);


      //TODO sounds like a job for TreeIterator
      let stack = new Array<EObject>();
      stack.push(this.dataSource.data[0]);

      while(stack.length>0){

        let next = stack.shift();

        console.log("next "+next);

        if(next===datalogdata.blabla){
          console.log("found selection");
          //selection.eSet(ereference, eobject);
          this.database.insertItem(container, ereference, eclass);


        }
        else{
          for(const child of next.eContents() as AbstractCollection<EObject>){

            stack.push(child);
          }
        }

      }
      */

    });
  }

  openImportDialog = () => {
    const dialogRef = this.dialog.open(EcoreImportDialog,
      {
        width: '66%',
        height: '66%',
        data: {
          eclass: null
        }
      }
      );


    dialogRef.afterClosed().subscribe(datalogdata => {

      const obj = datalogdata.eclass;

      if(obj!==null && obj instanceof EClassImpl){

        const eclass = obj as EClass;

        let view = ModelFactoryImpl.eINSTANCE.createView();
        view.name = eclass.name;
        view.rootEClass = eclass;

        for(let feature of eclass.eAllStructuralFeatures){

          let control = ModelFactoryImpl.eINSTANCE.createControl();
          control.name = feature.name;
          control.label = control.name;

          let modelRef = ModelFactoryImpl.eINSTANCE.createFeaturePathDomainModelReference();
          modelRef.domainModelEFeature = feature;
          control.domainModelReference = modelRef;


          view.children.add(control);


        }

        let data = new Array<EObject>();
        data.push(view);
        this.database.dataChange.next(data);
      }

    });

  }


  /*
  hasChild = (_: number, node: EObject) => {


    if(node!==null){
      return this.getChildren(node).size() > 0;
    }
    return false;

  }
  */
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

  select = (pair:[EReference, EClass])=>{

    this.data.option = pair;

    this.dialogRef.close(this.data);
  }

}


@Component({
  selector: 'ecore-import-dialog',
  templateUrl: 'import-dialog.html'
})
export class EcoreImportDialog {
  @ViewChild('fileInput') fileInput: ElementRef;

  root:EPackage;

  eclasses:EClass[] = [];

  constructor(
    public dialogRef: MatDialogRef<EcoreImportDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData2) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  readFile = (event:any) =>{


    console.log(event);
    let file = event.target.files[0];

    console.log(file);

    let reader  = new FileReader();

    reader.readAsText(file);

    reader.addEventListener("load", () => {
      console.log(reader.result);
      this.eclasses = [];
      let eobject = new XmiResource(EcorePackageImpl.eINSTANCE, EcoreFactoryImpl.eINSTANCE, new DOMParser()).load(reader.result as string);

      console.log(eobject);

      if(eobject instanceof EPackageImpl){

        this.root = eobject as EPackage;
        for(let eclassifier of this.root.eClassifiers){



          if(eclassifier instanceof EClassImpl){

            let eclass = eclassifier as EClass;

            if(!eclass.abstract && !eclass.interface){
              this.eclasses.push(eclass);

            }

          }
        }

      }


    }, false);


  }

  select = (eclass:EClass)=>{
    this.data.eclass = eclass;

    this.dialogRef.close(this.data);
  }


}


export class AngularRenderer extends ModelSwitch<string>{

  public caseControl(control:Control) : string {

    if(control.domainModelReference instanceof FeaturePathDomainModelReferenceImpl){

      if(control.visible){




        const feature = (control.domainModelReference as FeaturePathDomainModelReferenceImpl).domainModelEFeature;



        if(feature.eType.name==='EBoolean'){
          return `<div><mat-slide-toggle>${control.label}</mat-slide-toggle></div>`;
        }
        else if(feature.eType.name==='EString'){
          return `<div><mat-form-field><input type="text" matInput ${control.enabled?'':'disabled'} placeholder="${control.label}"></mat-form-field></div>`;
        }
        else if(feature.eType.name==='EInt'){
          return `<div><mat-form-field><input type="number" matInput placeholder="${control.label}"></mat-form-field></div>`;
        }
      }
    }
  }

}
