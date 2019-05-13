import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {ContainedElementImpl} from "./ContainedElementImpl";
import {Label} from "./Label";
import {VLabelStyle} from "./VLabelStyle";
import {LabelPackageLiterals} from "./LabelPackageLiterals";
import {ModelPackageLiterals} from "model/ModelPackageLiterals";
import {DomainModelReference} from "model/DomainModelReference";
		
			export class LabelBase
			extends ContainedElementImpl
			implements Label
			{
				private _style:VLabelStyle = VLabelStyle.H0;
				get style():VLabelStyle{
					return this._style;
				}
				set style(value:VLabelStyle){
					this._style = value; 
				}
				private _domainModelReference:DomainModelReference = null;
				get domainModelReference():DomainModelReference{
				
					return this._domainModelReference;
				}
				set domainModelReference(value:DomainModelReference) {
					if (value != this._domainModelReference) {
						let msgs:NotificationChain = null;
						if (this._domainModelReference != null){
							msgs = (this._domainModelReference).eInverseRemove(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - LabelPackageLiterals.LABEL_DOMAINMODELREFERENCE, /*null*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - LabelPackageLiterals.LABEL_DOMAINMODELREFERENCE, /*null*/ null, msgs);
						}
						msgs = this.basicSetDomainModelReference(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,LabelPackageLiterals.LABEL_DOMAINMODELREFERENCE , value, value));
					}
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return LabelBase.eStaticClass;
				}
			
			
				public basicSetDomainModelReference(newobj:DomainModelReference, msgs:NotificationChain):NotificationChain {
					let oldobj = this._domainModelReference;
					this._domainModelReference = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, LabelPackageLiterals.LABEL_DOMAINMODELREFERENCE, oldobj, newobj);
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
						case LabelPackageLiterals.LABEL_NAME:
							return this.name;
						case LabelPackageLiterals.LABEL_LABEL:
							return this.label;
						case LabelPackageLiterals.LABEL_VISIBLE:
							return this.visible;
						case LabelPackageLiterals.LABEL_ENABLED:
							return this.enabled;
						case LabelPackageLiterals.LABEL_READONLY:
							return this.readonly;
						case LabelPackageLiterals.LABEL_DIAGNOSTIC:
							return this.diagnostic;
						case LabelPackageLiterals.LABEL_ATTACHMENTS:
							return this.attachments;
						case LabelPackageLiterals.LABEL_STYLE:
							return this.style;
						case LabelPackageLiterals.LABEL_DOMAINMODELREFERENCE:
							return this.domainModelReference;
					}
					//return this.eGetFromContainedElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case LabelPackageLiterals.LABEL_STYLE:
							this.style = <VLabelStyle> newValue;
							return;
						case LabelPackageLiterals.LABEL_DOMAINMODELREFERENCE:
							this.domainModelReference = <DomainModelReference> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
