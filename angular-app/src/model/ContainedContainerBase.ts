import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {ModelPackageLiterals} from "./ModelPackageLiterals";
import {ContainedElementImpl} from "./ContainedElementImpl";
import {ContainedElement} from "./ContainedElement";
import {ContainerImpl} from "./ContainerImpl";
import {ContainedContainer} from "./ContainedContainer";
		
			export class ContainedContainerBase
			extends ContainedElementImpl
			implements ContainedContainer
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
					
					return ContainedContainerBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case ModelPackageLiterals.CONTAINEDCONTAINER_NAME:
							return this.name;
						case ModelPackageLiterals.CONTAINEDCONTAINER_LABEL:
							return this.label;
						case ModelPackageLiterals.CONTAINEDCONTAINER_VISIBLE:
							return this.visible;
						case ModelPackageLiterals.CONTAINEDCONTAINER_ENABLED:
							return this.enabled;
						case ModelPackageLiterals.CONTAINEDCONTAINER_READONLY:
							return this.readonly;
						case ModelPackageLiterals.CONTAINEDCONTAINER_DIAGNOSTIC:
							return this.diagnostic;
						case ModelPackageLiterals.CONTAINEDCONTAINER_ATTACHMENTS:
							return this.attachments;
						case ModelPackageLiterals.CONTAINEDCONTAINER_CHILDREN:
							return this.children;
					}
					//return this.eGetFromContainedElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case ModelPackageLiterals.CONTAINEDCONTAINER_CHILDREN:
							this.children.clear();
							this.children.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				public eBaseStructuralFeatureID(derivedFeatureID:number, baseClass:Function):number {
					if (baseClass === ContainerImpl) {
						switch (derivedFeatureID) {
							case ModelPackageLiterals.CONTAINEDCONTAINER_CHILDREN: return ModelPackageLiterals.CONTAINER_CHILDREN;
							default: return -1;
						}
					}
					return super.eBaseStructuralFeatureID(derivedFeatureID, baseClass);
				}
				
				public eDerivedStructuralFeatureID_number_Function(baseFeatureID:number, baseClass:Function):number {
					if (baseClass === ContainerImpl) {
						switch (baseFeatureID) {
							case ModelPackageLiterals.CONTAINER_CHILDREN: return ModelPackageLiterals.CONTAINEDCONTAINER_CHILDREN;
							default: return -1;
						}
					}
					return super.eDerivedStructuralFeatureID_number_Function(baseFeatureID, baseClass);
				}
				
			}
			
