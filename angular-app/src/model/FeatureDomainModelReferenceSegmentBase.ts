import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {ModelPackageLiterals} from "./ModelPackageLiterals";
import {FeatureDomainModelReferenceSegment} from "./FeatureDomainModelReferenceSegment";
		
			export class FeatureDomainModelReferenceSegmentBase
			extends BasicEObjectImpl
			implements FeatureDomainModelReferenceSegment
			{
				private _domainModelFeature:string = '';
				get domainModelFeature():string{
					return this._domainModelFeature;
				}
				set domainModelFeature(value:string){
					this._domainModelFeature = value; 
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return FeatureDomainModelReferenceSegmentBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case ModelPackageLiterals.FEATUREDOMAINMODELREFERENCESEGMENT_DOMAINMODELFEATURE:
							return this.domainModelFeature;
					}
					//return this.eGetFromDomainModelReferenceSegment(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case ModelPackageLiterals.FEATUREDOMAINMODELREFERENCESEGMENT_DOMAINMODELFEATURE:
							this.domainModelFeature = <string> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
