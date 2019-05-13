import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {EMap} from "ecore/EMap";
import {EcoreEMap} from "ecore/EcoreEMap";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
import {ModelPackageLiterals} from "./ModelPackageLiterals";
import {StringToObjectMapEntryBase} from "./StringToObjectMapEntryBase";
import {ViewModelLoadingProperties} from "./ViewModelLoadingProperties";
		
			export class ViewModelLoadingPropertiesBase
			extends BasicEObjectImpl
			implements ViewModelLoadingProperties
			{
				private _inheritableProperties:EMap<string, any>;
				
				get inheritableProperties():EMap<string, any>{
					if (this._inheritableProperties === null)
					{
						this._inheritableProperties = new EcoreEMap<string, any>(StringToObjectMapEntryBase.eStaticClass, StringToObjectMapEntryBase, this, ModelPackageLiterals.VIEWMODELLOADINGPROPERTIES_INHERITABLEPROPERTIES);
					}
					return this._inheritableProperties;
					
				}
				
				
				private _nonInheritableProperties:EMap<string, any>;
				
				get nonInheritableProperties():EMap<string, any>{
					if (this._nonInheritableProperties === null)
					{
						this._nonInheritableProperties = new EcoreEMap<string, any>(StringToObjectMapEntryBase.eStaticClass, StringToObjectMapEntryBase, this, ModelPackageLiterals.VIEWMODELLOADINGPROPERTIES_NONINHERITABLEPROPERTIES);
					}
					return this._nonInheritableProperties;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return ViewModelLoadingPropertiesBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case ModelPackageLiterals.VIEWMODELLOADINGPROPERTIES_INHERITABLEPROPERTIES:
							return this.inheritableProperties;
						case ModelPackageLiterals.VIEWMODELLOADINGPROPERTIES_NONINHERITABLEPROPERTIES:
							return this.nonInheritableProperties;
					}
					//return this.eGetFromViewModelProperties(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case ModelPackageLiterals.VIEWMODELLOADINGPROPERTIES_INHERITABLEPROPERTIES:
							(<EcoreEMap<string, any>>this.inheritableProperties).set(newValue);
							return;
						case ModelPackageLiterals.VIEWMODELLOADINGPROPERTIES_NONINHERITABLEPROPERTIES:
							(<EcoreEMap<string, any>>this.nonInheritableProperties).set(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
