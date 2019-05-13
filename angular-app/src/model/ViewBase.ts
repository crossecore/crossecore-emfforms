import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {ModelPackageLiterals} from "./ModelPackageLiterals";
import {ContainedElement} from "./ContainedElement";
import {ElementImpl} from "./ElementImpl";
import {ViewModelProperties} from "./ViewModelProperties";
import {View} from "./View";
		
			export class ViewBase
			extends ElementImpl
			implements View
			{
				private _ecorePaths:OrderedSet<string> = new OrderedSet<string>();
				get ecorePaths():OrderedSet<string>{
					if(this._ecorePaths===null){
						this._ecorePaths = new OrderedSet<string>();
							
					}
					return this._ecorePaths;
				}
				set ecorePaths(value:OrderedSet<string>){
					this._ecorePaths = value; 
				}
				private _rootEClass:EClass = null;
				get rootEClass():EClass{
				
					return this._rootEClass;
				}
				set rootEClass(value:EClass) {
					let oldvalue = this._rootEClass;
					this._rootEClass = value;
					if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,ModelPackageLiterals.VIEW_ROOTECLASS , oldvalue, value));
					}
				}
				private _children:OrderedSet<ContainedElement> = null;
				
				get children():OrderedSet<ContainedElement>{
					if(this._children===null){
						this._children = new OrderedSet<ContainedElement>(this, ModelPackageLiterals.VIEW_CHILDREN, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - ModelPackageLiterals.VIEW_CHILDREN);
							
					}
					return this._children;
					
				}
				
				
				private _loadingProperties:ViewModelProperties = null;
				get loadingProperties():ViewModelProperties{
				
					return this._loadingProperties;
				}
				set loadingProperties(value:ViewModelProperties) {
					if (value != this._loadingProperties) {
						let msgs:NotificationChain = null;
						if (this._loadingProperties != null){
							msgs = (this._loadingProperties).eInverseRemove(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - ModelPackageLiterals.VIEW_LOADINGPROPERTIES, /*null*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - ModelPackageLiterals.VIEW_LOADINGPROPERTIES, /*null*/ null, msgs);
						}
						msgs = this.basicSetLoadingProperties(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,ModelPackageLiterals.VIEW_LOADINGPROPERTIES , value, value));
					}
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return ViewBase.eStaticClass;
				}
			
			
				public basicSetLoadingProperties(newobj:ViewModelProperties, msgs:NotificationChain):NotificationChain {
					let oldobj = this._loadingProperties;
					this._loadingProperties = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, ModelPackageLiterals.VIEW_LOADINGPROPERTIES, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				public basicSetRootEClass(newobj:EClass, msgs:NotificationChain):NotificationChain {
					let oldobj = this._rootEClass;
					this._rootEClass = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, ModelPackageLiterals.VIEW_ROOTECLASS, oldobj, newobj);
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
						case ModelPackageLiterals.VIEW_NAME:
							return this.name;
						case ModelPackageLiterals.VIEW_LABEL:
							return this.label;
						case ModelPackageLiterals.VIEW_VISIBLE:
							return this.visible;
						case ModelPackageLiterals.VIEW_ENABLED:
							return this.enabled;
						case ModelPackageLiterals.VIEW_READONLY:
							return this.readonly;
						case ModelPackageLiterals.VIEW_DIAGNOSTIC:
							return this.diagnostic;
						case ModelPackageLiterals.VIEW_ATTACHMENTS:
							return this.attachments;
						case ModelPackageLiterals.VIEW_ROOTECLASS:
							return this.rootEClass;
						case ModelPackageLiterals.VIEW_CHILDREN:
							return this.children;
						case ModelPackageLiterals.VIEW_ECOREPATHS:
							return this.ecorePaths;
						case ModelPackageLiterals.VIEW_LOADINGPROPERTIES:
							return this.loadingProperties;
					}
					//return this.eGetFromElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case ModelPackageLiterals.VIEW_ECOREPATHS:
							this.ecorePaths.clear();
							this.ecorePaths.addAll(newValue);
							return;
						case ModelPackageLiterals.VIEW_ROOTECLASS:
							this.rootEClass = <EClass> newValue;
							return;
						case ModelPackageLiterals.VIEW_CHILDREN:
							this.children.clear();
							this.children.addAll(newValue);
							return;
						case ModelPackageLiterals.VIEW_LOADINGPROPERTIES:
							this.loadingProperties = <ViewModelProperties> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
