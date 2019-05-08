import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {ModelPackageLiterals} from "./ModelPackageLiterals";
import {DomainModelReference} from "./DomainModelReference";
import {DomainModelReferenceSegment} from "./DomainModelReferenceSegment";
		
			export class DomainModelReferenceBase
			extends BasicEObjectImpl
			implements DomainModelReference
			{
				private _segments:OrderedSet<DomainModelReferenceSegment> = null;
				
				get segments():OrderedSet<DomainModelReferenceSegment>{
					if(this._segments===null){
						this._segments = new OrderedSet<DomainModelReferenceSegment>(this, ModelPackageLiterals.DOMAINMODELREFERENCE_SEGMENTS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - ModelPackageLiterals.DOMAINMODELREFERENCE_SEGMENTS);
							
					}
					return this._segments;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return DomainModelReferenceBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case ModelPackageLiterals.DOMAINMODELREFERENCE_SEGMENTS:
							return this.segments;
					}
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case ModelPackageLiterals.DOMAINMODELREFERENCE_SEGMENTS:
							this.segments.clear();
							this.segments.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
