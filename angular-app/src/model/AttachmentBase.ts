import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {ModelPackageLiterals} from "./ModelPackageLiterals";
import {Attachment} from "./Attachment";
		
			export class AttachmentBase
			extends BasicEObjectImpl
			implements Attachment
			{

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return AttachmentBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
