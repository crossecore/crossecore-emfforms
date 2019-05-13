import {OrderedSet} from "ecore/OrderedSet";
import {InternalEObject} from "ecore/InternalEObject";
import {Diagnostic} from "./Diagnostic";
import {Attachment} from "./Attachment";

export interface Element
extends InternalEObject

{
	name:string;
	label:string;
	visible:boolean;
	enabled:boolean;
	readonly:boolean;
	
	diagnostic:Diagnostic;
	attachments: OrderedSet<Attachment>;
	

}

