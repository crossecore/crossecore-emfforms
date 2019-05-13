import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {ModelPackageLiterals} from "./ModelPackageLiterals";
import {StringToObjectMapEntry} from "./StringToObjectMapEntry";
		
			export class StringToObjectMapEntryBase
			extends BasicEObjectImpl
			implements StringToObjectMapEntry
			{
				private _key:string = '';
				get key():string{
					return this._key;
				}
				set key(value:string){
					this._key = value; 
				}
				private _value:any = null;
				get value():any{
					return this._value;
				}
				set value(value:any){
					this._value = value; 
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return StringToObjectMapEntryBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case ModelPackageLiterals.STRINGTOOBJECTMAPENTRY_KEY:
							return this.key;
						case ModelPackageLiterals.STRINGTOOBJECTMAPENTRY_VALUE:
							return this.value;
					}
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case ModelPackageLiterals.STRINGTOOBJECTMAPENTRY_KEY:
							this.key = <string> newValue;
							return;
						case ModelPackageLiterals.STRINGTOOBJECTMAPENTRY_VALUE:
							this.value = <any> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
