import {EFactoryImpl} from "ecore/EFactoryImpl";
import {EClass} from "ecore/EClass";
import {EDataType} from "ecore/EDataType";
import {EObject} from "ecore/EObject";
import {AllInstances} from "ecore/AllInstances";
import {ViewModelLoadingPropertiesImpl} from "./ViewModelLoadingPropertiesImpl";
import {StringToObjectMapEntry} from "./StringToObjectMapEntry";
import {DomainModelReference} from "./DomainModelReference";
import {Element} from "./Element";
import {ContainedContainer} from "./ContainedContainer";
import {Diagnostic} from "./Diagnostic";
import {Attachment} from "./Attachment";
import {DateTimeDisplayAttachmentImpl} from "./DateTimeDisplayAttachmentImpl";
import {FeaturePathDomainModelReference} from "./FeaturePathDomainModelReference";
import {FeatureDomainModelReferenceSegment} from "./FeatureDomainModelReferenceSegment";
import {ContainedElement} from "./ContainedElement";
import {Container} from "./Container";
import {Control} from "./Control";
import {ElementImpl} from "./ElementImpl";
import {ContainedContainerImpl} from "./ContainedContainerImpl";
import {StringToObjectMapEntryImpl} from "./StringToObjectMapEntryImpl";
import {ViewImpl} from "./ViewImpl";
import {ControlImpl} from "./ControlImpl";
import {DateTimeDisplayAttachment} from "./DateTimeDisplayAttachment";
import {DateTimeDisplayType} from "./DateTimeDisplayType";
import {ModelPackageImpl} from "./ModelPackageImpl";
import {ViewModelLoadingProperties} from "./ViewModelLoadingProperties";
import {LabelAlignment} from "./LabelAlignment";
import {FeaturePathDomainModelReferenceImpl} from "./FeaturePathDomainModelReferenceImpl";
import {ModelFactory} from "./ModelFactory";
import {View} from "./View";
import {ContainedElementImpl} from "./ContainedElementImpl";
import {FeatureDomainModelReferenceSegmentImpl} from "./FeatureDomainModelReferenceSegmentImpl";
import {DiagnosticImpl} from "./DiagnosticImpl";
import {DomainModelReferenceImpl} from "./DomainModelReferenceImpl";
import {ContainerImpl} from "./ContainerImpl";
import {AttachmentImpl} from "./AttachmentImpl";
export class ModelFactoryImpl extends EFactoryImpl implements ModelFactory{
	public static eINSTANCE : ModelFactory = ModelFactoryImpl.init();
	public static init() : ModelFactory 
	{
		return new ModelFactoryImpl();
	}
	
	public createDiagnostic = () : Diagnostic => {
		let theDiagnostic = new DiagnosticImpl();
		
		AllInstances.INSTANCE.put(theDiagnostic, "Diagnostic");
		
		return theDiagnostic;
	}
	public createAttachment = () : Attachment => {
		let theAttachment = new AttachmentImpl();
		
		AllInstances.INSTANCE.put(theAttachment, "Attachment");
		
		return theAttachment;
	}
	public createDomainModelReference = () : DomainModelReference => {
		let theDomainModelReference = new DomainModelReferenceImpl();
		
		AllInstances.INSTANCE.put(theDomainModelReference, "DomainModelReference");
		
		return theDomainModelReference;
	}
	public createFeaturePathDomainModelReference = () : FeaturePathDomainModelReference => {
		let theFeaturePathDomainModelReference = new FeaturePathDomainModelReferenceImpl();
		
		AllInstances.INSTANCE.put(theFeaturePathDomainModelReference, "FeaturePathDomainModelReference");
		
		return theFeaturePathDomainModelReference;
	}
	public createElement = () : Element => {
		let theElement = new ElementImpl();
		
		AllInstances.INSTANCE.put(theElement, "Element");
		
		return theElement;
	}
	public createView = () : View => {
		let theView = new ViewImpl();
		
		AllInstances.INSTANCE.put(theView, "View");
		
		return theView;
	}
	public createContainedElement = () : ContainedElement => {
		let theContainedElement = new ContainedElementImpl();
		
		AllInstances.INSTANCE.put(theContainedElement, "ContainedElement");
		
		return theContainedElement;
	}
	public createContainer = () : Container => {
		let theContainer = new ContainerImpl();
		
		AllInstances.INSTANCE.put(theContainer, "Container");
		
		return theContainer;
	}
	public createContainedContainer = () : ContainedContainer => {
		let theContainedContainer = new ContainedContainerImpl();
		
		AllInstances.INSTANCE.put(theContainedContainer, "ContainedContainer");
		
		return theContainedContainer;
	}
	public createControl = () : Control => {
		let theControl = new ControlImpl();
		
		AllInstances.INSTANCE.put(theControl, "Control");
		
		return theControl;
	}
	public createViewModelLoadingProperties = () : ViewModelLoadingProperties => {
		let theViewModelLoadingProperties = new ViewModelLoadingPropertiesImpl();
		
		AllInstances.INSTANCE.put(theViewModelLoadingProperties, "ViewModelLoadingProperties");
		
		return theViewModelLoadingProperties;
	}
	public createStringToObjectMapEntry = () : StringToObjectMapEntry => {
		let theStringToObjectMapEntry = new StringToObjectMapEntryImpl();
		
		AllInstances.INSTANCE.put(theStringToObjectMapEntry, "StringToObjectMapEntry");
		
		return theStringToObjectMapEntry;
	}
	public createDateTimeDisplayAttachment = () : DateTimeDisplayAttachment => {
		let theDateTimeDisplayAttachment = new DateTimeDisplayAttachmentImpl();
		
		AllInstances.INSTANCE.put(theDateTimeDisplayAttachment, "DateTimeDisplayAttachment");
		
		return theDateTimeDisplayAttachment;
	}
	public createFeatureDomainModelReferenceSegment = () : FeatureDomainModelReferenceSegment => {
		let theFeatureDomainModelReferenceSegment = new FeatureDomainModelReferenceSegmentImpl();
		
		AllInstances.INSTANCE.put(theFeatureDomainModelReferenceSegment, "FeatureDomainModelReferenceSegment");
		
		return theFeatureDomainModelReferenceSegment;
	}
	
	public create(eClass:EClass):EObject {
		switch (eClass.getClassifierID()) {
			case ModelPackageImpl.DIAGNOSTIC: return this.createDiagnostic();
			case ModelPackageImpl.FEATUREPATHDOMAINMODELREFERENCE: return this.createFeaturePathDomainModelReference();
			case ModelPackageImpl.VIEW: return this.createView();
			case ModelPackageImpl.CONTROL: return this.createControl();
			case ModelPackageImpl.VIEWMODELLOADINGPROPERTIES: return this.createViewModelLoadingProperties();
			case ModelPackageImpl.STRINGTOOBJECTMAPENTRY: return this.createStringToObjectMapEntry();
			case ModelPackageImpl.DATETIMEDISPLAYATTACHMENT: return this.createDateTimeDisplayAttachment();
			case ModelPackageImpl.FEATUREDOMAINMODELREFERENCESEGMENT: return this.createFeatureDomainModelReferenceSegment();
			default:
				throw new Error("The class '" + eClass.name + "' is not a valid classifier");
		}
	}
	
	
	public createFromString(eDataType:EDataType, initialValue:string):any {
		switch (eDataType.getClassifierID()) {
		case ModelPackageImpl.LABELALIGNMENT:
			return this.createLabelAlignmentFromString(eDataType, initialValue);
		case ModelPackageImpl.DATETIMEDISPLAYTYPE:
			return this.createDateTimeDisplayTypeFromString(eDataType, initialValue);
		default:
			throw new Error("The datatype '" + eDataType.name + "' is not a valid classifier");
		}
	}
	
	public convertToString(eDataType:EDataType, instanceValue:any):string {
		switch (eDataType.getClassifierID()) {
		case ModelPackageImpl.LABELALIGNMENT:
			return this.convertLabelAlignmentToString(eDataType, instanceValue);
		case ModelPackageImpl.DATETIMEDISPLAYTYPE:
			return this.convertDateTimeDisplayTypeToString(eDataType, instanceValue);
		default:
			throw new Error("The datatype '" + eDataType.name + "' is not a valid classifier");
		}
	}
	
	
	public createLabelAlignmentFromString(eDataType:EDataType, initialValue:string):LabelAlignment {
		let result:LabelAlignment = LabelAlignment.get_string(initialValue);
		if (result == null)
			throw new Error(
	                        "The value '" + initialValue + "' is not a valid enumerator of '" + eDataType.name + "'");
		return result;
	}
	
	public convertLabelAlignmentToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : instanceValue.toString();
	}
	public createDateTimeDisplayTypeFromString(eDataType:EDataType, initialValue:string):DateTimeDisplayType {
		let result:DateTimeDisplayType = DateTimeDisplayType.get_string(initialValue);
		if (result == null)
			throw new Error(
	                        "The value '" + initialValue + "' is not a valid enumerator of '" + eDataType.name + "'");
		return result;
	}
	
	public convertDateTimeDisplayTypeToString(eDataType:EDataType, instanceValue:any):string {
		return instanceValue === null ? null : instanceValue.toString();
	}
}
