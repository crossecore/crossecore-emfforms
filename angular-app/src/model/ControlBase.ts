import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {ModelPackageLiterals} from "./ModelPackageLiterals";
import {ContainedElementImpl} from "./ContainedElementImpl";
import {Control} from "./Control";
import {DomainModelReference} from "./DomainModelReference";
import {LabelAlignment} from "./LabelAlignment";
		
			export class ControlBase
			extends ContainedElementImpl
			implements Control
			{
				private _labelAlignment:LabelAlignment = LabelAlignment.DEFAULT;
				get labelAlignment():LabelAlignment{
					return this._labelAlignment;
				}
				set labelAlignment(value:LabelAlignment){
					this._labelAlignment = value; 
				}
				private _domainModelReference:DomainModelReference = null;
				get domainModelReference():DomainModelReference{
				
					return this._domainModelReference;
				}
				set domainModelReference(value:DomainModelReference) {
					if (value != this._domainModelReference) {
						let msgs:NotificationChain = null;
						if (this._domainModelReference != null){
							msgs = (this._domainModelReference).eInverseRemove(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - ModelPackageLiterals.CONTROL_DOMAINMODELREFERENCE, /*null*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - ModelPackageLiterals.CONTROL_DOMAINMODELREFERENCE, /*null*/ null, msgs);
						}
						msgs = this.basicSetDomainModelReference(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,ModelPackageLiterals.CONTROL_DOMAINMODELREFERENCE , value, value));
					}
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return ControlBase.eStaticClass;
				}
			
			
				public basicSetDomainModelReference(newobj:DomainModelReference, msgs:NotificationChain):NotificationChain {
					let oldobj = this._domainModelReference;
					this._domainModelReference = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, ModelPackageLiterals.CONTROL_DOMAINMODELREFERENCE, oldobj, newobj);
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
						case ModelPackageLiterals.CONTROL_NAME:
							return this.name;
						case ModelPackageLiterals.CONTROL_LABEL:
							return this.label;
						case ModelPackageLiterals.CONTROL_VISIBLE:
							return this.visible;
						case ModelPackageLiterals.CONTROL_ENABLED:
							return this.enabled;
						case ModelPackageLiterals.CONTROL_READONLY:
							return this.readonly;
						case ModelPackageLiterals.CONTROL_DIAGNOSTIC:
							return this.diagnostic;
						case ModelPackageLiterals.CONTROL_ATTACHMENTS:
							return this.attachments;
						case ModelPackageLiterals.CONTROL_LABELALIGNMENT:
							return this.labelAlignment;
						case ModelPackageLiterals.CONTROL_DOMAINMODELREFERENCE:
							return this.domainModelReference;
					}
					//return this.eGetFromContainedElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case ModelPackageLiterals.CONTROL_LABELALIGNMENT:
							this.labelAlignment = <LabelAlignment> newValue;
							return;
						case ModelPackageLiterals.CONTROL_DOMAINMODELREFERENCE:
							this.domainModelReference = <DomainModelReference> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
