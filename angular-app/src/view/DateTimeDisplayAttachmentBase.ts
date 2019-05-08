import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {ModelPackageLiterals} from "./ModelPackageLiterals";
import {AttachmentImpl} from "./AttachmentImpl";
import {DateTimeDisplayAttachment} from "./DateTimeDisplayAttachment";
import {DateTimeDisplayType} from "./DateTimeDisplayType";
		
			export class DateTimeDisplayAttachmentBase
			extends AttachmentImpl
			implements DateTimeDisplayAttachment
			{
				private _displayType:DateTimeDisplayType = DateTimeDisplayType.TIMEANDDATE;
				get displayType():DateTimeDisplayType{
					return this._displayType;
				}
				set displayType(value:DateTimeDisplayType){
					this._displayType = value; 
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return DateTimeDisplayAttachmentBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case ModelPackageLiterals.DATETIMEDISPLAYATTACHMENT_DISPLAYTYPE:
							return this.displayType;
					}
					//return this.eGetFromAttachment(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case ModelPackageLiterals.DATETIMEDISPLAYATTACHMENT_DISPLAYTYPE:
							this.displayType = <DateTimeDisplayType> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
