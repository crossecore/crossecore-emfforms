import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {EStructuralFeature} from "ecore/EStructuralFeature";
import {AbstractCollection} from "ecore/AbstractCollection";
import {Sequence} from "ecore/Sequence";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {EReference} from "ecore/EReference";
import {ModelPackageLiterals} from "./ModelPackageLiterals";
import {DomainModelReferenceImpl} from "./DomainModelReferenceImpl";
import {FeaturePathDomainModelReference} from "./FeaturePathDomainModelReference";
		
			export class FeaturePathDomainModelReferenceBase
			extends DomainModelReferenceImpl
			implements FeaturePathDomainModelReference
			{
				private _domainModelEFeature:EStructuralFeature = null;
				get domainModelEFeature():EStructuralFeature{
				
					return this._domainModelEFeature;
				}
				set domainModelEFeature(value:EStructuralFeature) {
					let oldvalue = this._domainModelEFeature;
					this._domainModelEFeature = value;
					if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,ModelPackageLiterals.FEATUREPATHDOMAINMODELREFERENCE_DOMAINMODELEFEATURE , oldvalue, value));
					}
				}
				private _domainModelEReferencePath:Sequence<EReference> = null;
				
				get domainModelEReferencePath():Sequence<EReference>{
					if(this._domainModelEReferencePath===null){
						this._domainModelEReferencePath = new Sequence<EReference>(this, ModelPackageLiterals.FEATUREPATHDOMAINMODELREFERENCE_DOMAINMODELEREFERENCEPATH, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - ModelPackageLiterals.FEATUREPATHDOMAINMODELREFERENCE_DOMAINMODELEREFERENCEPATH);
							
					}
					return this._domainModelEReferencePath;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return FeaturePathDomainModelReferenceBase.eStaticClass;
				}
			
			
				public basicSetDomainModelEFeature(newobj:EStructuralFeature, msgs:NotificationChain):NotificationChain {
					let oldobj = this._domainModelEFeature;
					this._domainModelEFeature = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, ModelPackageLiterals.FEATUREPATHDOMAINMODELREFERENCE_DOMAINMODELEFEATURE, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case ModelPackageLiterals.FEATUREPATHDOMAINMODELREFERENCE_SEGMENTS:
							return this.segments;
						case ModelPackageLiterals.FEATUREPATHDOMAINMODELREFERENCE_DOMAINMODELEFEATURE:
							return this.domainModelEFeature;
						case ModelPackageLiterals.FEATUREPATHDOMAINMODELREFERENCE_DOMAINMODELEREFERENCEPATH:
							return this.domainModelEReferencePath;
					}
					//return this.eGetFromDomainModelReference(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case ModelPackageLiterals.FEATUREPATHDOMAINMODELREFERENCE_DOMAINMODELEFEATURE:
							this.domainModelEFeature = <EStructuralFeature> newValue;
							return;
						case ModelPackageLiterals.FEATUREPATHDOMAINMODELREFERENCE_DOMAINMODELEREFERENCEPATH:
							this.domainModelEReferencePath.clear();
							this.domainModelEReferencePath.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
