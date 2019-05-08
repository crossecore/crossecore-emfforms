import {FeaturePathDomainModelReference} from "./FeaturePathDomainModelReference";
import {ViewModelLoadingProperties} from "./ViewModelLoadingProperties";
import {Attachment} from "./Attachment";
import {StringToObjectMapEntry} from "./StringToObjectMapEntry";
import {Element} from "./Element";
import {DomainModelReferenceSegment} from "./DomainModelReferenceSegment";
import {FeatureDomainModelReferenceSegment} from "./FeatureDomainModelReferenceSegment";
import {ContainedElement} from "./ContainedElement";
import {Switch} from "ecore/Switch";
import {ModelPackageImpl} from "./ModelPackageImpl";
import {DomainModelReference} from "./DomainModelReference";
import {ContainedContainer} from "./ContainedContainer";
import {View} from "./View";
import {HasTooltip} from "./HasTooltip";
import {EPackage} from "ecore/EPackage";
import {Control} from "./Control";
import {EObject} from "ecore/EObject";
import {ModelPackage} from "./ModelPackage";
import {Diagnostic} from "./Diagnostic";
import {Container} from "./Container";
import {ViewModelProperties} from "./ViewModelProperties";
import {DateTimeDisplayAttachment} from "./DateTimeDisplayAttachment";
export class ModelSwitch<T> extends Switch<T> {
	protected static modelPackage:ModelPackage;
	
	constructor(){
		super();
		if (ModelSwitch.modelPackage == null) {
			ModelSwitch.modelPackage = ModelPackageImpl.eINSTANCE;
		}	
	}
	
	public isSwitchFor(ePackage:EPackage):boolean{
		return ePackage === ModelSwitch.modelPackage;
	}
	
	public doSwitch(classifierID:number, theEObject:EObject):T {
		switch (classifierID) {
			case ModelPackageImpl.DIAGNOSTIC: {
				let obj:Diagnostic = <Diagnostic>theEObject;
				let result:T = this.caseDiagnostic(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case ModelPackageImpl.ATTACHMENT: {
				let obj:Attachment = <Attachment>theEObject;
				let result:T = this.caseAttachment(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case ModelPackageImpl.DOMAINMODELREFERENCE: {
				let obj:DomainModelReference = <DomainModelReference>theEObject;
				let result:T = this.caseDomainModelReference(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case ModelPackageImpl.FEATUREPATHDOMAINMODELREFERENCE: {
				let obj:FeaturePathDomainModelReference = <FeaturePathDomainModelReference>theEObject;
				let result:T = this.caseFeaturePathDomainModelReference(obj);
				if (result == null) result = this.caseDomainModelReference(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case ModelPackageImpl.ELEMENT: {
				let obj:Element = <Element>theEObject;
				let result:T = this.caseElement(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case ModelPackageImpl.VIEW: {
				let obj:View = <View>theEObject;
				let result:T = this.caseView(obj);
				if (result == null) result = this.caseElement(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case ModelPackageImpl.CONTAINEDELEMENT: {
				let obj:ContainedElement = <ContainedElement>theEObject;
				let result:T = this.caseContainedElement(obj);
				if (result == null) result = this.caseElement(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case ModelPackageImpl.CONTAINER: {
				let obj:Container = <Container>theEObject;
				let result:T = this.caseContainer(obj);
				if (result == null) result = this.caseElement(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case ModelPackageImpl.CONTAINEDCONTAINER: {
				let obj:ContainedContainer = <ContainedContainer>theEObject;
				let result:T = this.caseContainedContainer(obj);
				if (result == null) result = this.caseElement(obj);
				if (result == null) result = this.caseContainedElement(obj);
				if (result == null) result = this.caseContainer(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case ModelPackageImpl.CONTROL: {
				let obj:Control = <Control>theEObject;
				let result:T = this.caseControl(obj);
				if (result == null) result = this.caseElement(obj);
				if (result == null) result = this.caseContainedElement(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case ModelPackageImpl.VIEWMODELLOADINGPROPERTIES: {
				let obj:ViewModelLoadingProperties = <ViewModelLoadingProperties>theEObject;
				let result:T = this.caseViewModelLoadingProperties(obj);
				if (result == null) result = this.caseViewModelProperties(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case ModelPackageImpl.STRINGTOOBJECTMAPENTRY: {
				let obj:StringToObjectMapEntry = <StringToObjectMapEntry>theEObject;
				let result:T = this.caseStringToObjectMapEntry(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case ModelPackageImpl.VIEWMODELPROPERTIES: {
				let obj:ViewModelProperties = <ViewModelProperties>theEObject;
				let result:T = this.caseViewModelProperties(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case ModelPackageImpl.DATETIMEDISPLAYATTACHMENT: {
				let obj:DateTimeDisplayAttachment = <DateTimeDisplayAttachment>theEObject;
				let result:T = this.caseDateTimeDisplayAttachment(obj);
				if (result == null) result = this.caseAttachment(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case ModelPackageImpl.HASTOOLTIP: {
				let obj:HasTooltip = <HasTooltip>theEObject;
				let result:T = this.caseHasTooltip(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case ModelPackageImpl.DOMAINMODELREFERENCESEGMENT: {
				let obj:DomainModelReferenceSegment = <DomainModelReferenceSegment>theEObject;
				let result:T = this.caseDomainModelReferenceSegment(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case ModelPackageImpl.FEATUREDOMAINMODELREFERENCESEGMENT: {
				let obj:FeatureDomainModelReferenceSegment = <FeatureDomainModelReferenceSegment>theEObject;
				let result:T = this.caseFeatureDomainModelReferenceSegment(obj);
				if (result == null) result = this.caseDomainModelReferenceSegment(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			default: return this.defaultCase(theEObject);
		}
	}
	
	
	public caseDiagnostic(object:Diagnostic):T {
		return null;
	}
	public caseAttachment(object:Attachment):T {
		return null;
	}
	public caseDomainModelReference(object:DomainModelReference):T {
		return null;
	}
	public caseFeaturePathDomainModelReference(object:FeaturePathDomainModelReference):T {
		return null;
	}
	public caseElement(object:Element):T {
		return null;
	}
	public caseView(object:View):T {
		return null;
	}
	public caseContainedElement(object:ContainedElement):T {
		return null;
	}
	public caseContainer(object:Container):T {
		return null;
	}
	public caseContainedContainer(object:ContainedContainer):T {
		return null;
	}
	public caseControl(object:Control):T {
		return null;
	}
	public caseViewModelLoadingProperties(object:ViewModelLoadingProperties):T {
		return null;
	}
	public caseStringToObjectMapEntry(object:StringToObjectMapEntry):T {
		return null;
	}
	public caseViewModelProperties(object:ViewModelProperties):T {
		return null;
	}
	public caseDateTimeDisplayAttachment(object:DateTimeDisplayAttachment):T {
		return null;
	}
	public caseHasTooltip(object:HasTooltip):T {
		return null;
	}
	public caseDomainModelReferenceSegment(object:DomainModelReferenceSegment):T {
		return null;
	}
	public caseFeatureDomainModelReferenceSegment(object:FeatureDomainModelReferenceSegment):T {
		return null;
	}
	
}

