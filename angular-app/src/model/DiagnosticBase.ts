import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {ModelPackageLiterals} from "./ModelPackageLiterals";
import {Diagnostic} from "./Diagnostic";
		
			export class DiagnosticBase
			extends BasicEObjectImpl
			implements Diagnostic
			{
				private _diagnostics:OrderedSet<any> = new OrderedSet<any>();
				get diagnostics():OrderedSet<any>{
					if(this._diagnostics===null){
						this._diagnostics = new OrderedSet<any>();
							
					}
					return this._diagnostics;
				}
				set diagnostics(value:OrderedSet<any>){
					this._diagnostics = value; 
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return DiagnosticBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case ModelPackageLiterals.DIAGNOSTIC_DIAGNOSTICS:
							return this.diagnostics;
					}
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case ModelPackageLiterals.DIAGNOSTIC_DIAGNOSTICS:
							this.diagnostics.clear();
							this.diagnostics.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
