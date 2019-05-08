import {OrderedSet} from "ecore/OrderedSet";
import {ContainedElement} from "./ContainedElement";
import {DomainModelReference} from "./DomainModelReference";
import {LabelAlignment} from "./LabelAlignment";

export interface Control
extends ContainedElement

{
	labelAlignment:LabelAlignment;
	
	domainModelReference:DomainModelReference;
	

}

