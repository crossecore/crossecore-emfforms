import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {ContainedElement} from "./ContainedElement";
import {Element} from "./Element";
import {ViewModelProperties} from "./ViewModelProperties";

export interface View
extends Element

{
	
	ecorePaths:OrderedSet<string>;
	
	rootEClass:EClass;
	children: OrderedSet<ContainedElement>;
	loadingProperties:ViewModelProperties;
	

}

