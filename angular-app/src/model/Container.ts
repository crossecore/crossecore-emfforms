import {OrderedSet} from "ecore/OrderedSet";
import {ContainedElement} from "./ContainedElement";
import {Element} from "./Element";

export interface Container
extends Element

{
	
	children: OrderedSet<ContainedElement>;
	

}

