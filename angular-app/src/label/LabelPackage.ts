import {EAttribute} from "ecore/EAttribute";
import {EEnum} from "ecore/EEnum";
import {EReference} from "ecore/EReference";
import {EClass} from "ecore/EClass";
import {EPackage} from "ecore/EPackage";
export interface LabelPackage extends EPackage {
	getLabel():EClass;
	getLabel_DomainModelReference():EReference;
	
	getLabel_Style():EAttribute;
	getVLabelStyle():EEnum;
}
