import {OrderedSet} from "ecore/OrderedSet";
import {EMap} from "ecore/EMap";
import {ViewModelProperties} from "./ViewModelProperties";

export interface ViewModelLoadingProperties
extends ViewModelProperties

{
	
	inheritableProperties:EMap<string, any>;
	nonInheritableProperties:EMap<string, any>;
	

}

