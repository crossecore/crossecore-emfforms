import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {LabelPackageLiterals} from "./LabelPackageLiterals";
import {ModelPackageLiterals} from "model/ModelPackageLiterals";
import {Element} from "model/Element";
import {Diagnostic} from "model/Diagnostic";
import {Attachment} from "model/Attachment";
		
			export class ElementBase
			extends BasicEObjectImpl
			implements Element
			{
				private _name:string = '';
				get name():string{
					return this._name;
				}
				set name(value:string){
					this._name = value; 
				}
				private _label:string = '';
				get label():string{
					return this._label;
				}
				set label(value:string){
					this._label = value; 
				}
				private _visible:boolean = false;
				get visible():boolean{
					return this._visible;
				}
				set visible(value:boolean){
					this._visible = value; 
				}
				private _enabled:boolean = false;
				get enabled():boolean{
					return this._enabled;
				}
				set enabled(value:boolean){
					this._enabled = value; 
				}
				private _readonly:boolean = false;
				get readonly():boolean{
					return this._readonly;
				}
				set readonly(value:boolean){
					this._readonly = value; 
				}
				private _diagnostic:Diagnostic = null;
				get diagnostic():Diagnostic{
				
					return this._diagnostic;
				}
				set diagnostic(value:Diagnostic) {
					if (value != this._diagnostic) {
						let msgs:NotificationChain = null;
						if (this._diagnostic != null){
							msgs = (this._diagnostic).eInverseRemove(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - ModelPackageLiterals.ELEMENT_DIAGNOSTIC, /*null*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - ModelPackageLiterals.ELEMENT_DIAGNOSTIC, /*null*/ null, msgs);
						}
						msgs = this.basicSetDiagnostic(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,ModelPackageLiterals.ELEMENT_DIAGNOSTIC , value, value));
					}
				}
				private _attachments:OrderedSet<Attachment> = null;
				
				get attachments():OrderedSet<Attachment>{
					if(this._attachments===null){
						this._attachments = new OrderedSet<Attachment>(this, ModelPackageLiterals.ELEMENT_ATTACHMENTS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - ModelPackageLiterals.ELEMENT_ATTACHMENTS);
							
					}
					return this._attachments;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return ElementBase.eStaticClass;
				}
			
			
				public basicSetDiagnostic(newobj:Diagnostic, msgs:NotificationChain):NotificationChain {
					let oldobj = this._diagnostic;
					this._diagnostic = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, ModelPackageLiterals.ELEMENT_DIAGNOSTIC, oldobj, newobj);
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
						case ModelPackageLiterals.ELEMENT_NAME:
							return this.name;
						case ModelPackageLiterals.ELEMENT_LABEL:
							return this.label;
						case ModelPackageLiterals.ELEMENT_VISIBLE:
							return this.visible;
						case ModelPackageLiterals.ELEMENT_ENABLED:
							return this.enabled;
						case ModelPackageLiterals.ELEMENT_READONLY:
							return this.readonly;
						case ModelPackageLiterals.ELEMENT_DIAGNOSTIC:
							return this.diagnostic;
						case ModelPackageLiterals.ELEMENT_ATTACHMENTS:
							return this.attachments;
					}
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case ModelPackageLiterals.ELEMENT_NAME:
							this.name = <string> newValue;
							return;
						case ModelPackageLiterals.ELEMENT_LABEL:
							this.label = <string> newValue;
							return;
						case ModelPackageLiterals.ELEMENT_VISIBLE:
							this.visible = <boolean> newValue;
							return;
						case ModelPackageLiterals.ELEMENT_ENABLED:
							this.enabled = <boolean> newValue;
							return;
						case ModelPackageLiterals.ELEMENT_READONLY:
							this.readonly = <boolean> newValue;
							return;
						case ModelPackageLiterals.ELEMENT_DIAGNOSTIC:
							this.diagnostic = <Diagnostic> newValue;
							return;
						case ModelPackageLiterals.ELEMENT_ATTACHMENTS:
							this.attachments.clear();
							this.attachments.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
