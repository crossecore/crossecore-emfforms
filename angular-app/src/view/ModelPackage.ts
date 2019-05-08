import {EAttribute} from "ecore/EAttribute";
import {EEnum} from "ecore/EEnum";
import {EReference} from "ecore/EReference";
import {EClass} from "ecore/EClass";
import {EPackage} from "ecore/EPackage";
export interface ModelPackage extends EPackage {
	getDiagnostic():EClass;
	
	getDiagnostic_Diagnostics():EAttribute;
	getAttachment():EClass;
	
	getDomainModelReference():EClass;
	getDomainModelReference_Segments():EReference;
	
	getFeaturePathDomainModelReference():EClass;
	getFeaturePathDomainModelReference_DomainModelEFeature():EReference;
	getFeaturePathDomainModelReference_DomainModelEReferencePath():EReference;
	
	getElement():EClass;
	getElement_Diagnostic():EReference;
	getElement_Attachments():EReference;
	
	getElement_Name():EAttribute;
	getElement_Label():EAttribute;
	getElement_Visible():EAttribute;
	getElement_Enabled():EAttribute;
	getElement_Readonly():EAttribute;
	getView():EClass;
	getView_RootEClass():EReference;
	getView_Children():EReference;
	getView_LoadingProperties():EReference;
	
	getView_EcorePaths():EAttribute;
	getContainedElement():EClass;
	
	getContainer():EClass;
	getContainer_Children():EReference;
	
	getContainedContainer():EClass;
	
	getControl():EClass;
	getControl_DomainModelReference():EReference;
	
	getControl_LabelAlignment():EAttribute;
	getViewModelProperties():EClass;
	
	getViewModelLoadingProperties():EClass;
	getViewModelLoadingProperties_InheritableProperties():EReference;
	getViewModelLoadingProperties_NonInheritableProperties():EReference;
	
	getStringToObjectMapEntry():EClass;
	
	getStringToObjectMapEntry_Key():EAttribute;
	getStringToObjectMapEntry_Value():EAttribute;
	getDateTimeDisplayAttachment():EClass;
	
	getDateTimeDisplayAttachment_DisplayType():EAttribute;
	getHasTooltip():EClass;
	
	getHasTooltip_Tooltip():EAttribute;
	getDomainModelReferenceSegment():EClass;
	
	getFeatureDomainModelReferenceSegment():EClass;
	
	getFeatureDomainModelReferenceSegment_DomainModelFeature():EAttribute;
	getLabelAlignment():EEnum;
	getDateTimeDisplayType():EEnum;
}
