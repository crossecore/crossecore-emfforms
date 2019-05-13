import {Label} from "./Label";
import {LabelPackage} from "./LabelPackage";
import {EObject} from "ecore/EObject";
import {LabelPackageImpl} from "./LabelPackageImpl";
import {Switch} from "ecore/Switch";
import {EPackage} from "ecore/EPackage";
export class LabelSwitch<T> extends Switch<T> {
	protected static modelPackage:LabelPackage;
	
	constructor(){
		super();
		if (LabelSwitch.modelPackage == null) {
			LabelSwitch.modelPackage = LabelPackageImpl.eINSTANCE;
		}	
	}
	
	public isSwitchFor(ePackage:EPackage):boolean{
		return ePackage === LabelSwitch.modelPackage;
	}
	
	public doSwitch(classifierID:number, theEObject:EObject):T {
		switch (classifierID) {
			case LabelPackageImpl.LABEL: {
				let obj:Label = <Label>theEObject;
				let result:T = this.caseLabel(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			default: return this.defaultCase(theEObject);
		}
	}
	
	
	public caseLabel(object:Label):T {
		return null;
	}
	
}

