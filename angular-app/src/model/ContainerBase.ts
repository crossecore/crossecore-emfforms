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
import {Container} from "./Container";
import {ElementImpl} from "./ElementImpl";
		
			export class ContainerBase
			extends ElementImpl
			implements Container
			{
				private _children:OrderedSet<ContainedElement> = null;
				
				get children():OrderedSet<ContainedElement>{
					if(this._children===null){
						this._children = new OrderedSet<ContainedElement>(this, ModelPackageLiterals.CONTAINER_CHILDREN, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - ModelPackageLiterals.CONTAINER_CHILDREN);
							
					}
					return this._children;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return ContainerBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case ModelPackageLiterals.CONTAINER_NAME:
							return this.name;
						case ModelPackageLiterals.CONTAINER_LABEL:
							return this.label;
						case ModelPackageLiterals.CONTAINER_VISIBLE:
							return this.visible;
						case ModelPackageLiterals.CONTAINER_ENABLED:
							return this.enabled;
						case ModelPackageLiterals.CONTAINER_READONLY:
							return this.readonly;
						case ModelPackageLiterals.CONTAINER_DIAGNOSTIC:
							return this.diagnostic;
						case ModelPackageLiterals.CONTAINER_ATTACHMENTS:
							return this.attachments;
						case ModelPackageLiterals.CONTAINER_CHILDREN:
							return this.children;
					}
					//return this.eGetFromElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case ModelPackageLiterals.CONTAINER_CHILDREN:
							this.children.clear();
							this.children.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
