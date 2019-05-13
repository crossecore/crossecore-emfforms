import {EFactoryImpl} from "ecore/EFactoryImpl";
import {EClass} from "ecore/EClass";
import {EDataType} from "ecore/EDataType";
import {EObject} from "ecore/EObject";
import {AllInstances} from "ecore/AllInstances";
import {LabelFactory} from "./LabelFactory";
import {LabelImpl} from "./LabelImpl";
import {Label} from "./Label";
import {VLabelStyle} from "./VLabelStyle";
import {LabelPackageImpl} from "./LabelPackageImpl";
export class LabelFactoryImpl extends EFactoryImpl implements LabelFactory{
	public static eINSTANCE : LabelFactory = LabelFactoryImpl.init();
	public static init() : LabelFactory 
	{
		return new LabelFactoryImpl();
	}
	
	public createLabel = () : Label => {
		let theLabel = new LabelImpl();
		
		AllInstances.INSTANCE.put(theLabel, "Label");
		
		return theLabel;
	}
	
	public create(eClass:EClass):EObject {
		switch (eClass.getClassifierID()) {
			case LabelPackageImpl.LABEL: return this.createLabel();
			default:
				throw new Error("The class '" + eClass.name + "' is not a valid classifier");
		}
	}
	
	
	public createFromString(eDataType:EDataType, initialValue:string):any {
		switch (eDataType.getClassifierID()) {
		case LabelPackageImpl.VLABELSTYLE:
			return this.createVLabelStyleFromString(eDataType, initialValue);
		default:
			throw new Error("The datatype '" + eDataType.name + "' is not a valid classifier");
		}
	}
	
	public convertToString(eDataType:EDataType, instanceValue:any):string {
		switch (eDataType.getClassifierID()) {
		case LabelPackageImpl.VLABELSTYLE:
			return this.convertVLabelStyleToString(eDataType, instanceValue);
		default:
			throw new Error("The datatype '" + eDataType.name + "' is not a valid classifier");
		}
	}
	
	
	public createVLabelStyleFromString(eDataType:EDataType, initialValue:string):VLabelStyle {
		let result:VLabelStyle = VLabelStyle.get_string(initialValue);
		if (result == null)
			throw new Error(
	                        "The value '" + initialValue + "' is not a valid enumerator of '" + eDataType.name + "'");
		return result;
	}
	
	public convertVLabelStyleToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : instanceValue.toString();
	}
}
