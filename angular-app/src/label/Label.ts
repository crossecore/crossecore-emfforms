import {OrderedSet} from "ecore/OrderedSet";
import {VLabelStyle} from "./VLabelStyle";
import {ContainedElement} from "model/ContainedElement";
import {DomainModelReference} from "model/DomainModelReference";

export interface Label
extends ContainedElement

{
	style:VLabelStyle;
	
	domainModelReference:DomainModelReference;
	

}

