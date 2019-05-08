import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {ModelPackageLiterals} from "./ModelPackageLiterals";
import {ContainedElement} from "./ContainedElement";
import {ElementImpl} from "./ElementImpl";
		
			export class ContainedElementBase
			extends ElementImpl
			implements ContainedElement
			{

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return ContainedElementBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case ModelPackageLiterals.CONTAINEDELEMENT_NAME:
							return this.name;
						case ModelPackageLiterals.CONTAINEDELEMENT_LABEL:
							return this.label;
						case ModelPackageLiterals.CONTAINEDELEMENT_VISIBLE:
							return this.visible;
						case ModelPackageLiterals.CONTAINEDELEMENT_ENABLED:
							return this.enabled;
						case ModelPackageLiterals.CONTAINEDELEMENT_READONLY:
							return this.readonly;
						case ModelPackageLiterals.CONTAINEDELEMENT_DIAGNOSTIC:
							return this.diagnostic;
						case ModelPackageLiterals.CONTAINEDELEMENT_ATTACHMENTS:
							return this.attachments;
					}
					//return this.eGetFromElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
