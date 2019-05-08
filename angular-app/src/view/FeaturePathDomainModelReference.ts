import {OrderedSet} from "ecore/OrderedSet";
import {EStructuralFeature} from "ecore/EStructuralFeature";
import {Sequence} from "ecore/Sequence";
import {EReference} from "ecore/EReference";
import {DomainModelReference} from "./DomainModelReference";

export interface FeaturePathDomainModelReference
extends DomainModelReference

{
	
	domainModelEFeature:EStructuralFeature;
	domainModelEReferencePath: Sequence<EReference>;
	

}

