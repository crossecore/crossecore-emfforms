import {OrderedSet} from "ecore/OrderedSet";
import {InternalEObject} from "ecore/InternalEObject";
import {DomainModelReferenceSegment} from "./DomainModelReferenceSegment";

export interface DomainModelReference
extends InternalEObject

{
	
	segments: OrderedSet<DomainModelReferenceSegment>;
	

}

