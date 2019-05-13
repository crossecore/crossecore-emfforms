import {ModelPackageLiterals} from "model/ModelPackageLiterals";
export class LabelPackageLiterals{
	public static ELEMENT:number = 4;
	public static ELEMENT_FEATURE_COUNT:number = 7;
	public static ELEMENT_OPERATION_COUNT:number = 0;
	
	public static ELEMENT_NAME:number = 0;
	public static ELEMENT_LABEL:number = 1;
	public static ELEMENT_VISIBLE:number = 2;
	public static ELEMENT_ENABLED:number = 3;
	public static ELEMENT_READONLY:number = 4;
	public static ELEMENT_DIAGNOSTIC:number = 5;
	public static ELEMENT_ATTACHMENTS:number = 6;
	
	public static CONTAINEDELEMENT:number = 6;
	public static CONTAINEDELEMENT_FEATURE_COUNT:number = ModelPackageLiterals.ELEMENT_FEATURE_COUNT + 0;
	public static CONTAINEDELEMENT_OPERATION_COUNT:number = ModelPackageLiterals.ELEMENT_OPERATION_COUNT + 0;
	
	public static CONTAINEDELEMENT_NAME:number = 0;
	public static CONTAINEDELEMENT_LABEL:number = 1;
	public static CONTAINEDELEMENT_VISIBLE:number = 2;
	public static CONTAINEDELEMENT_ENABLED:number = 3;
	public static CONTAINEDELEMENT_READONLY:number = 4;
	public static CONTAINEDELEMENT_DIAGNOSTIC:number = 5;
	public static CONTAINEDELEMENT_ATTACHMENTS:number = 6;
	
	public static LABEL:number = 0;
	public static LABEL_FEATURE_COUNT:number = ModelPackageLiterals.CONTAINEDELEMENT_FEATURE_COUNT + 2;
	public static LABEL_OPERATION_COUNT:number = ModelPackageLiterals.CONTAINEDELEMENT_OPERATION_COUNT + 0;
	
	public static LABEL_NAME:number = 0;
	public static LABEL_LABEL:number = 1;
	public static LABEL_VISIBLE:number = 2;
	public static LABEL_ENABLED:number = 3;
	public static LABEL_READONLY:number = 4;
	public static LABEL_DIAGNOSTIC:number = 5;
	public static LABEL_ATTACHMENTS:number = 6;
	public static LABEL_STYLE:number = 7;
	public static LABEL_DOMAINMODELREFERENCE:number = 8;
	
	public static VLABELSTYLE:number = 1;
	
}
