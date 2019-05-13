import {EAttribute} from "ecore/EAttribute";
import {ControlImpl} from "./ControlImpl";
import {AttachmentBase} from "./AttachmentBase";
import {FeatureDomainModelReferenceSegmentImpl} from "./FeatureDomainModelReferenceSegmentImpl";
import {EcoreFactoryImpl} from "ecore/EcoreFactoryImpl";
import {ElementImpl} from "./ElementImpl";
import {EClass} from "ecore/EClass";
import {ContainedContainerImpl} from "./ContainedContainerImpl";
import {StringToObjectMapEntryBase} from "./StringToObjectMapEntryBase";
import {ContainedElementImpl} from "./ContainedElementImpl";
import {ContainedContainerBase} from "./ContainedContainerBase";
import {EEnum} from "ecore/EEnum";
import {DiagnosticBase} from "./DiagnosticBase";
import {DomainModelReferenceBase} from "./DomainModelReferenceBase";
import {DateTimeDisplayAttachmentBase} from "./DateTimeDisplayAttachmentBase";
import {EOperation} from "ecore/EOperation";
import {EFactory} from "ecore/EFactory";
import {ControlBase} from "./ControlBase";
import {EPackageImpl} from "ecore/EPackageImpl";
import {ElementBase} from "./ElementBase";
import {ViewBase} from "./ViewBase";
import {FeatureDomainModelReferenceSegmentBase} from "./FeatureDomainModelReferenceSegmentBase";
import {DomainModelReferenceImpl} from "./DomainModelReferenceImpl";
import {ViewModelLoadingPropertiesImpl} from "./ViewModelLoadingPropertiesImpl";
import {FeaturePathDomainModelReferenceImpl} from "./FeaturePathDomainModelReferenceImpl";
import {DateTimeDisplayAttachmentImpl} from "./DateTimeDisplayAttachmentImpl";
import {DiagnosticImpl} from "./DiagnosticImpl";
import {EcorePackageImpl} from "ecore/EcorePackageImpl";
import {EReference} from "ecore/EReference";
import {ContainerImpl} from "./ContainerImpl";
import {ViewImpl} from "./ViewImpl";
import {ViewModelLoadingPropertiesBase} from "./ViewModelLoadingPropertiesBase";
import {ModelPackage} from "./ModelPackage";
import {FeaturePathDomainModelReferenceBase} from "./FeaturePathDomainModelReferenceBase";
import {ContainedElementBase} from "./ContainedElementBase";
import {ContainerBase} from "./ContainerBase";
import {AttachmentImpl} from "./AttachmentImpl";
import {StringToObjectMapEntryImpl} from "./StringToObjectMapEntryImpl";
export class ModelPackageImpl extends EPackageImpl implements ModelPackage{
		public static eNAME:string = "model";
		
		public static eNS_URI:string = "http://org/eclipse/emf/ecp/view/model/1180";
		
		public static eNS_PREFIX:string = "org.eclipse.emf.ecp.view.model";
		
		
		
		/*
		constructor(){
			//no private constructors in TypeScript
			super(ModelPackageImpl.eNS_URI, ModelFactoryImpl.eINSTANCE as any as EFactory);
		}
		*/
		
		public static init():ModelPackage
		{

	        // Obtain or create and register package
	        let theModelPackage = new ModelPackageImpl();
	        theModelPackage.ecorePackage = EcorePackageImpl.eINSTANCE;
	        theModelPackage.ecoreFactory = EcoreFactoryImpl.eINSTANCE;
	
	        // Create package meta-data objects
	        theModelPackage.createPackageContents();
	
	        // Initialize created meta-data
	        theModelPackage.initializePackageContents();

	        return theModelPackage;
        }
        
        private isCreated:boolean = false;
        
        public createPackageContents = ():void =>
        {
            if (this.isCreated) return;
            this.isCreated = true;
			this.DiagnosticEClass = this.createEClass(ModelPackageImpl.DIAGNOSTIC);
			DiagnosticBase.eStaticClass = this.DiagnosticEClass;
			this.createEAttribute(this.DiagnosticEClass, ModelPackageImpl.DIAGNOSTIC_DIAGNOSTICS);
			this.AttachmentEClass = this.createEClass(ModelPackageImpl.ATTACHMENT);
			AttachmentBase.eStaticClass = this.AttachmentEClass;
			this.DomainModelReferenceEClass = this.createEClass(ModelPackageImpl.DOMAINMODELREFERENCE);
			DomainModelReferenceBase.eStaticClass = this.DomainModelReferenceEClass;
			this.createEReference(this.DomainModelReferenceEClass, ModelPackageImpl.DOMAINMODELREFERENCE_SEGMENTS);
			this.FeaturePathDomainModelReferenceEClass = this.createEClass(ModelPackageImpl.FEATUREPATHDOMAINMODELREFERENCE);
			FeaturePathDomainModelReferenceBase.eStaticClass = this.FeaturePathDomainModelReferenceEClass;
			this.createEReference(this.FeaturePathDomainModelReferenceEClass, ModelPackageImpl.FEATUREPATHDOMAINMODELREFERENCE_DOMAINMODELEFEATURE);
			this.createEReference(this.FeaturePathDomainModelReferenceEClass, ModelPackageImpl.FEATUREPATHDOMAINMODELREFERENCE_DOMAINMODELEREFERENCEPATH);
			this.ElementEClass = this.createEClass(ModelPackageImpl.ELEMENT);
			ElementBase.eStaticClass = this.ElementEClass;
			this.createEAttribute(this.ElementEClass, ModelPackageImpl.ELEMENT_NAME);
			this.createEAttribute(this.ElementEClass, ModelPackageImpl.ELEMENT_LABEL);
			this.createEAttribute(this.ElementEClass, ModelPackageImpl.ELEMENT_VISIBLE);
			this.createEAttribute(this.ElementEClass, ModelPackageImpl.ELEMENT_ENABLED);
			this.createEAttribute(this.ElementEClass, ModelPackageImpl.ELEMENT_READONLY);
			this.createEReference(this.ElementEClass, ModelPackageImpl.ELEMENT_DIAGNOSTIC);
			this.createEReference(this.ElementEClass, ModelPackageImpl.ELEMENT_ATTACHMENTS);
			this.ViewEClass = this.createEClass(ModelPackageImpl.VIEW);
			ViewBase.eStaticClass = this.ViewEClass;
			this.createEReference(this.ViewEClass, ModelPackageImpl.VIEW_ROOTECLASS);
			this.createEReference(this.ViewEClass, ModelPackageImpl.VIEW_CHILDREN);
			this.createEAttribute(this.ViewEClass, ModelPackageImpl.VIEW_ECOREPATHS);
			this.createEReference(this.ViewEClass, ModelPackageImpl.VIEW_LOADINGPROPERTIES);
			this.ContainedElementEClass = this.createEClass(ModelPackageImpl.CONTAINEDELEMENT);
			ContainedElementBase.eStaticClass = this.ContainedElementEClass;
			this.ContainerEClass = this.createEClass(ModelPackageImpl.CONTAINER);
			ContainerBase.eStaticClass = this.ContainerEClass;
			this.createEReference(this.ContainerEClass, ModelPackageImpl.CONTAINER_CHILDREN);
			this.ContainedContainerEClass = this.createEClass(ModelPackageImpl.CONTAINEDCONTAINER);
			ContainedContainerBase.eStaticClass = this.ContainedContainerEClass;
			this.ControlEClass = this.createEClass(ModelPackageImpl.CONTROL);
			ControlBase.eStaticClass = this.ControlEClass;
			this.createEAttribute(this.ControlEClass, ModelPackageImpl.CONTROL_LABELALIGNMENT);
			this.createEReference(this.ControlEClass, ModelPackageImpl.CONTROL_DOMAINMODELREFERENCE);
			this.ViewModelLoadingPropertiesEClass = this.createEClass(ModelPackageImpl.VIEWMODELLOADINGPROPERTIES);
			ViewModelLoadingPropertiesBase.eStaticClass = this.ViewModelLoadingPropertiesEClass;
			this.createEReference(this.ViewModelLoadingPropertiesEClass, ModelPackageImpl.VIEWMODELLOADINGPROPERTIES_INHERITABLEPROPERTIES);
			this.createEReference(this.ViewModelLoadingPropertiesEClass, ModelPackageImpl.VIEWMODELLOADINGPROPERTIES_NONINHERITABLEPROPERTIES);
			this.StringToObjectMapEntryEClass = this.createEClass(ModelPackageImpl.STRINGTOOBJECTMAPENTRY);
			StringToObjectMapEntryBase.eStaticClass = this.StringToObjectMapEntryEClass;
			this.createEAttribute(this.StringToObjectMapEntryEClass, ModelPackageImpl.STRINGTOOBJECTMAPENTRY_KEY);
			this.createEAttribute(this.StringToObjectMapEntryEClass, ModelPackageImpl.STRINGTOOBJECTMAPENTRY_VALUE);
			this.ViewModelPropertiesEClass = this.createEClass(ModelPackageImpl.VIEWMODELPROPERTIES);
			this.DateTimeDisplayAttachmentEClass = this.createEClass(ModelPackageImpl.DATETIMEDISPLAYATTACHMENT);
			DateTimeDisplayAttachmentBase.eStaticClass = this.DateTimeDisplayAttachmentEClass;
			this.createEAttribute(this.DateTimeDisplayAttachmentEClass, ModelPackageImpl.DATETIMEDISPLAYATTACHMENT_DISPLAYTYPE);
			this.HasTooltipEClass = this.createEClass(ModelPackageImpl.HASTOOLTIP);
			this.createEAttribute(this.HasTooltipEClass, ModelPackageImpl.HASTOOLTIP_TOOLTIP);
			this.DomainModelReferenceSegmentEClass = this.createEClass(ModelPackageImpl.DOMAINMODELREFERENCESEGMENT);
			this.FeatureDomainModelReferenceSegmentEClass = this.createEClass(ModelPackageImpl.FEATUREDOMAINMODELREFERENCESEGMENT);
			FeatureDomainModelReferenceSegmentBase.eStaticClass = this.FeatureDomainModelReferenceSegmentEClass;
			this.createEAttribute(this.FeatureDomainModelReferenceSegmentEClass, ModelPackageImpl.FEATUREDOMAINMODELREFERENCESEGMENT_DOMAINMODELFEATURE);
			
			this.LabelAlignmentEEnum = this.createEEnum(ModelPackageImpl.LABELALIGNMENT);
			this.DateTimeDisplayTypeEEnum = this.createEEnum(ModelPackageImpl.DATETIMEDISPLAYTYPE);
			
        }
        private isInitialized:boolean = false;
        public initializePackageContents=():void =>
        {
            if (this.isInitialized) return;
            this.isInitialized = true;
            // Initialize package
            this.name = ModelPackageImpl.eNAME;
            this.nsPrefix = ModelPackageImpl.eNS_PREFIX;
            this.nsURI = ModelPackageImpl.eNS_URI;

			
			
			
			
			this.FeaturePathDomainModelReferenceEClass.eSuperTypes.add(this.getDomainModelReference());
			
			
			this.ViewEClass.eSuperTypes.add(this.getElement());
			
			this.ContainedElementEClass.eSuperTypes.add(this.getElement());
			
			this.ContainerEClass.eSuperTypes.add(this.getElement());
			
			this.ContainedContainerEClass.eSuperTypes.add(this.getContainedElement());
			this.ContainedContainerEClass.eSuperTypes.add(this.getContainer());
			
			this.ControlEClass.eSuperTypes.add(this.getContainedElement());
			
			this.ViewModelLoadingPropertiesEClass.eSuperTypes.add(this.getViewModelProperties());
			
			
			
			this.DateTimeDisplayAttachmentEClass.eSuperTypes.add(this.getAttachment());
			
			
			
			this.FeatureDomainModelReferenceSegmentEClass.eSuperTypes.add(this.getDomainModelReferenceSegment());
			var op:EOperation = null;
			
			this.initEClass(
			this.DiagnosticEClass,
			DiagnosticImpl, 
			"Diagnostic", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getDiagnostic_Diagnostics(), 
				this.ecorePackage.getEJavaObject(), 
				"diagnostics", 
				null, 
				0, 
				-1, 
				DiagnosticImpl, 
				EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			
			this.initEClass(
			this.AttachmentEClass,
			AttachmentImpl, 
			"Attachment", 
			EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			
			
			
			
			this.initEClass(
			this.DomainModelReferenceEClass,
			DomainModelReferenceImpl, 
			"DomainModelReference", 
			EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			
			this.initEReference(
				this.getDomainModelReference_Segments(),
				this.getDomainModelReferenceSegment(), 
				null, 
				"segments", 
				null, 
				0, 
				-1, 
				DomainModelReferenceImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			this.initEClass(
			this.FeaturePathDomainModelReferenceEClass,
			FeaturePathDomainModelReferenceImpl, 
			"FeaturePathDomainModelReference", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			
			this.initEReference(
				this.getFeaturePathDomainModelReference_DomainModelEFeature(),
				this.ecorePackage.getEStructuralFeature(), 
				null, 
				"domainModelEFeature", 
				null, 
				1, 
				1, 
				FeaturePathDomainModelReferenceImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getFeaturePathDomainModelReference_DomainModelEReferencePath(),
				this.ecorePackage.getEReference(), 
				null, 
				"domainModelEReferencePath", 
				null, 
				0, 
				-1, 
				FeaturePathDomainModelReferenceImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			this.initEClass(
			this.ElementEClass,
			ElementImpl, 
			"Element", 
			EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getElement_Name(), 
				this.ecorePackage.getEString(), 
				"name", 
				null, 
				0, 
				1, 
				ElementImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getElement_Label(), 
				this.ecorePackage.getEString(), 
				"label", 
				null, 
				0, 
				1, 
				ElementImpl, 
				EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getElement_Visible(), 
				this.ecorePackage.getEBoolean(), 
				"visible", 
				"true", 
				0, 
				1, 
				ElementImpl, 
				EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getElement_Enabled(), 
				this.ecorePackage.getEBoolean(), 
				"enabled", 
				"true", 
				0, 
				1, 
				ElementImpl, 
				EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getElement_Readonly(), 
				this.ecorePackage.getEBoolean(), 
				"readonly", 
				"false", 
				0, 
				1, 
				ElementImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			this.initEReference(
				this.getElement_Diagnostic(),
				this.getDiagnostic(), 
				null, 
				"diagnostic", 
				null, 
				0, 
				1, 
				ElementImpl, 
				EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getElement_Attachments(),
				this.getAttachment(), 
				null, 
				"attachments", 
				null, 
				0, 
				-1, 
				ElementImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			this.initEClass(
			this.ViewEClass,
			ViewImpl, 
			"View", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getView_EcorePaths(), 
				this.ecorePackage.getEString(), 
				"ecorePaths", 
				null, 
				0, 
				-1, 
				ViewImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			this.initEReference(
				this.getView_RootEClass(),
				this.ecorePackage.getEClass(), 
				null, 
				"rootEClass", 
				null, 
				1, 
				1, 
				ViewImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getView_Children(),
				this.getContainedElement(), 
				null, 
				"children", 
				null, 
				0, 
				-1, 
				ViewImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getView_LoadingProperties(),
				this.getViewModelProperties(), 
				null, 
				"loadingProperties", 
				null, 
				1, 
				1, 
				ViewImpl, 
				EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			this.initEClass(
			this.ContainedElementEClass,
			ContainedElementImpl, 
			"ContainedElement", 
			EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			
			
			
			
			this.initEClass(
			this.ContainerEClass,
			ContainerImpl, 
			"Container", 
			EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			
			this.initEReference(
				this.getContainer_Children(),
				this.getContainedElement(), 
				null, 
				"children", 
				null, 
				0, 
				-1, 
				ContainerImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			this.initEClass(
			this.ContainedContainerEClass,
			ContainedContainerImpl, 
			"ContainedContainer", 
			EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			
			
			
			
			this.initEClass(
			this.ControlEClass,
			ControlImpl, 
			"Control", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getControl_LabelAlignment(), 
				this.getLabelAlignment(), 
				"labelAlignment", 
				"Default", 
				1, 
				1, 
				ControlImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			this.initEReference(
				this.getControl_DomainModelReference(),
				this.getDomainModelReference(), 
				null, 
				"domainModelReference", 
				null, 
				1, 
				1, 
				ControlImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			this.initEClass(
			this.ViewModelLoadingPropertiesEClass,
			ViewModelLoadingPropertiesImpl, 
			"ViewModelLoadingProperties", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			
			this.initEReference(
				this.getViewModelLoadingProperties_InheritableProperties(),
				this.getStringToObjectMapEntry(), 
				null, 
				"inheritableProperties", 
				null, 
				0, 
				-1, 
				ViewModelLoadingPropertiesImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEReference(
				this.getViewModelLoadingProperties_NonInheritableProperties(),
				this.getStringToObjectMapEntry(), 
				null, 
				"nonInheritableProperties", 
				null, 
				0, 
				-1, 
				ViewModelLoadingPropertiesImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			this.initEClass(
			this.StringToObjectMapEntryEClass,
			StringToObjectMapEntryImpl, 
			"StringToObjectMapEntry", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getStringToObjectMapEntry_Key(), 
				this.ecorePackage.getEString(), 
				"key", 
				null, 
				1, 
				1, 
				StringToObjectMapEntryImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			this.initEAttribute_EClassifier(
				this.getStringToObjectMapEntry_Value(), 
				this.ecorePackage.getEJavaObject(), 
				"value", 
				null, 
				1, 
				1, 
				StringToObjectMapEntryImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			
			this.initEClass(
			this.ViewModelPropertiesEClass,
			null, 
			"ViewModelProperties", 
			EPackageImpl.IS_ABSTRACT, 
			EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			
			
			
			
			this.initEClass(
			this.DateTimeDisplayAttachmentEClass,
			DateTimeDisplayAttachmentImpl, 
			"DateTimeDisplayAttachment", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getDateTimeDisplayAttachment_DisplayType(), 
				this.getDateTimeDisplayType(), 
				"displayType", 
				"TimeAndDate", 
				0, 
				1, 
				DateTimeDisplayAttachmentImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			
			this.initEClass(
			this.HasTooltipEClass,
			null, 
			"HasTooltip", 
			EPackageImpl.IS_ABSTRACT, 
			EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getHasTooltip_Tooltip(), 
				this.ecorePackage.getEString(), 
				"tooltip", 
				null, 
				0, 
				1, 
				null, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			
			this.initEClass(
			this.DomainModelReferenceSegmentEClass,
			null, 
			"DomainModelReferenceSegment", 
			EPackageImpl.IS_ABSTRACT, 
			EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			
			
			
			
			this.initEClass(
			this.FeatureDomainModelReferenceSegmentEClass,
			FeatureDomainModelReferenceSegmentImpl, 
			"FeatureDomainModelReferenceSegment", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getFeatureDomainModelReferenceSegment_DomainModelFeature(), 
				this.ecorePackage.getEString(), 
				"domainModelFeature", 
				null, 
				1, 
				1, 
				FeatureDomainModelReferenceSegmentImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			

			this.initEEnum(this.LabelAlignmentEEnum, null, "LabelAlignment");
			this.initEEnum(this.DateTimeDisplayTypeEEnum, null, "DateTimeDisplayType");
			
        }
		
		
		private DiagnosticEClass:EClass = null;
		private AttachmentEClass:EClass = null;
		private DomainModelReferenceEClass:EClass = null;
		private FeaturePathDomainModelReferenceEClass:EClass = null;
		private ElementEClass:EClass = null;
		private ViewEClass:EClass = null;
		private ContainedElementEClass:EClass = null;
		private ContainerEClass:EClass = null;
		private ContainedContainerEClass:EClass = null;
		private ControlEClass:EClass = null;
		private ViewModelLoadingPropertiesEClass:EClass = null;
		private StringToObjectMapEntryEClass:EClass = null;
		private ViewModelPropertiesEClass:EClass = null;
		private DateTimeDisplayAttachmentEClass:EClass = null;
		private HasTooltipEClass:EClass = null;
		private DomainModelReferenceSegmentEClass:EClass = null;
		private FeatureDomainModelReferenceSegmentEClass:EClass = null;
		
		
		private LabelAlignmentEEnum:EEnum = null;
		private DateTimeDisplayTypeEEnum:EEnum = null;
		
		
		
		public static DIAGNOSTIC:number = 0;
		public static DIAGNOSTIC_FEATURE_COUNT:number = 1;
		public static DIAGNOSTIC_OPERATION_COUNT:number = 0;
		
		public static DIAGNOSTIC_DIAGNOSTICS:number = 0;
		
		public static ATTACHMENT:number = 1;
		public static ATTACHMENT_FEATURE_COUNT:number = 0;
		public static ATTACHMENT_OPERATION_COUNT:number = 0;
		
		
		public static DOMAINMODELREFERENCE:number = 2;
		public static DOMAINMODELREFERENCE_FEATURE_COUNT:number = 1;
		public static DOMAINMODELREFERENCE_OPERATION_COUNT:number = 0;
		
		public static DOMAINMODELREFERENCE_SEGMENTS:number = 0;
		
		public static FEATUREPATHDOMAINMODELREFERENCE:number = 3;
		public static FEATUREPATHDOMAINMODELREFERENCE_FEATURE_COUNT:number = ModelPackageImpl.DOMAINMODELREFERENCE_FEATURE_COUNT + 2;
		public static FEATUREPATHDOMAINMODELREFERENCE_OPERATION_COUNT:number = ModelPackageImpl.DOMAINMODELREFERENCE_OPERATION_COUNT + 0;
		
		public static FEATUREPATHDOMAINMODELREFERENCE_SEGMENTS:number = 0;
		public static FEATUREPATHDOMAINMODELREFERENCE_DOMAINMODELEFEATURE:number = 1;
		public static FEATUREPATHDOMAINMODELREFERENCE_DOMAINMODELEREFERENCEPATH:number = 2;
		
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
		
		public static VIEW:number = 5;
		public static VIEW_FEATURE_COUNT:number = ModelPackageImpl.ELEMENT_FEATURE_COUNT + 4;
		public static VIEW_OPERATION_COUNT:number = ModelPackageImpl.ELEMENT_OPERATION_COUNT + 0;
		
		public static VIEW_NAME:number = 0;
		public static VIEW_LABEL:number = 1;
		public static VIEW_VISIBLE:number = 2;
		public static VIEW_ENABLED:number = 3;
		public static VIEW_READONLY:number = 4;
		public static VIEW_DIAGNOSTIC:number = 5;
		public static VIEW_ATTACHMENTS:number = 6;
		public static VIEW_ROOTECLASS:number = 7;
		public static VIEW_CHILDREN:number = 8;
		public static VIEW_ECOREPATHS:number = 9;
		public static VIEW_LOADINGPROPERTIES:number = 10;
		
		public static CONTAINEDELEMENT:number = 6;
		public static CONTAINEDELEMENT_FEATURE_COUNT:number = ModelPackageImpl.ELEMENT_FEATURE_COUNT + 0;
		public static CONTAINEDELEMENT_OPERATION_COUNT:number = ModelPackageImpl.ELEMENT_OPERATION_COUNT + 0;
		
		public static CONTAINEDELEMENT_NAME:number = 0;
		public static CONTAINEDELEMENT_LABEL:number = 1;
		public static CONTAINEDELEMENT_VISIBLE:number = 2;
		public static CONTAINEDELEMENT_ENABLED:number = 3;
		public static CONTAINEDELEMENT_READONLY:number = 4;
		public static CONTAINEDELEMENT_DIAGNOSTIC:number = 5;
		public static CONTAINEDELEMENT_ATTACHMENTS:number = 6;
		
		public static CONTAINER:number = 7;
		public static CONTAINER_FEATURE_COUNT:number = ModelPackageImpl.ELEMENT_FEATURE_COUNT + 1;
		public static CONTAINER_OPERATION_COUNT:number = ModelPackageImpl.ELEMENT_OPERATION_COUNT + 0;
		
		public static CONTAINER_NAME:number = 0;
		public static CONTAINER_LABEL:number = 1;
		public static CONTAINER_VISIBLE:number = 2;
		public static CONTAINER_ENABLED:number = 3;
		public static CONTAINER_READONLY:number = 4;
		public static CONTAINER_DIAGNOSTIC:number = 5;
		public static CONTAINER_ATTACHMENTS:number = 6;
		public static CONTAINER_CHILDREN:number = 7;
		
		public static CONTAINEDCONTAINER:number = 8;
		public static CONTAINEDCONTAINER_FEATURE_COUNT:number = ModelPackageImpl.CONTAINEDELEMENT_FEATURE_COUNT + ModelPackageImpl.CONTAINER_FEATURE_COUNT + 0;
		public static CONTAINEDCONTAINER_OPERATION_COUNT:number = ModelPackageImpl.CONTAINEDELEMENT_OPERATION_COUNT + ModelPackageImpl.CONTAINER_OPERATION_COUNT + 0;
		
		public static CONTAINEDCONTAINER_NAME:number = 0;
		public static CONTAINEDCONTAINER_LABEL:number = 1;
		public static CONTAINEDCONTAINER_VISIBLE:number = 2;
		public static CONTAINEDCONTAINER_ENABLED:number = 3;
		public static CONTAINEDCONTAINER_READONLY:number = 4;
		public static CONTAINEDCONTAINER_DIAGNOSTIC:number = 5;
		public static CONTAINEDCONTAINER_ATTACHMENTS:number = 6;
		public static CONTAINEDCONTAINER_CHILDREN:number = 7;
		
		public static CONTROL:number = 9;
		public static CONTROL_FEATURE_COUNT:number = ModelPackageImpl.CONTAINEDELEMENT_FEATURE_COUNT + 2;
		public static CONTROL_OPERATION_COUNT:number = ModelPackageImpl.CONTAINEDELEMENT_OPERATION_COUNT + 0;
		
		public static CONTROL_NAME:number = 0;
		public static CONTROL_LABEL:number = 1;
		public static CONTROL_VISIBLE:number = 2;
		public static CONTROL_ENABLED:number = 3;
		public static CONTROL_READONLY:number = 4;
		public static CONTROL_DIAGNOSTIC:number = 5;
		public static CONTROL_ATTACHMENTS:number = 6;
		public static CONTROL_LABELALIGNMENT:number = 7;
		public static CONTROL_DOMAINMODELREFERENCE:number = 8;
		
		public static VIEWMODELPROPERTIES:number = 13;
		public static VIEWMODELPROPERTIES_FEATURE_COUNT:number = 0;
		public static VIEWMODELPROPERTIES_OPERATION_COUNT:number = 0;
		
		
		public static VIEWMODELLOADINGPROPERTIES:number = 11;
		public static VIEWMODELLOADINGPROPERTIES_FEATURE_COUNT:number = ModelPackageImpl.VIEWMODELPROPERTIES_FEATURE_COUNT + 2;
		public static VIEWMODELLOADINGPROPERTIES_OPERATION_COUNT:number = ModelPackageImpl.VIEWMODELPROPERTIES_OPERATION_COUNT + 0;
		
		public static VIEWMODELLOADINGPROPERTIES_INHERITABLEPROPERTIES:number = 0;
		public static VIEWMODELLOADINGPROPERTIES_NONINHERITABLEPROPERTIES:number = 1;
		
		public static STRINGTOOBJECTMAPENTRY:number = 12;
		public static STRINGTOOBJECTMAPENTRY_FEATURE_COUNT:number = 2;
		public static STRINGTOOBJECTMAPENTRY_OPERATION_COUNT:number = 0;
		
		public static STRINGTOOBJECTMAPENTRY_KEY:number = 0;
		public static STRINGTOOBJECTMAPENTRY_VALUE:number = 1;
		
		public static DATETIMEDISPLAYATTACHMENT:number = 15;
		public static DATETIMEDISPLAYATTACHMENT_FEATURE_COUNT:number = ModelPackageImpl.ATTACHMENT_FEATURE_COUNT + 1;
		public static DATETIMEDISPLAYATTACHMENT_OPERATION_COUNT:number = ModelPackageImpl.ATTACHMENT_OPERATION_COUNT + 0;
		
		public static DATETIMEDISPLAYATTACHMENT_DISPLAYTYPE:number = 0;
		
		public static HASTOOLTIP:number = 16;
		public static HASTOOLTIP_FEATURE_COUNT:number = 1;
		public static HASTOOLTIP_OPERATION_COUNT:number = 0;
		
		public static HASTOOLTIP_TOOLTIP:number = 0;
		
		public static DOMAINMODELREFERENCESEGMENT:number = 17;
		public static DOMAINMODELREFERENCESEGMENT_FEATURE_COUNT:number = 0;
		public static DOMAINMODELREFERENCESEGMENT_OPERATION_COUNT:number = 0;
		
		
		public static FEATUREDOMAINMODELREFERENCESEGMENT:number = 18;
		public static FEATUREDOMAINMODELREFERENCESEGMENT_FEATURE_COUNT:number = ModelPackageImpl.DOMAINMODELREFERENCESEGMENT_FEATURE_COUNT + 1;
		public static FEATUREDOMAINMODELREFERENCESEGMENT_OPERATION_COUNT:number = ModelPackageImpl.DOMAINMODELREFERENCESEGMENT_OPERATION_COUNT + 0;
		
		public static FEATUREDOMAINMODELREFERENCESEGMENT_DOMAINMODELFEATURE:number = 0;
		
		public static LABELALIGNMENT:number = 10;
		
		public static DATETIMEDISPLAYTYPE:number = 14;
		
		
		/*Important: Call init() AFTER metaobject ids have been assigned.*/
		public static eINSTANCE:ModelPackage = ModelPackageImpl.init();
		
		
		public getDiagnostic=():EClass=>{return this.DiagnosticEClass;}
		
		public getDiagnostic_Diagnostics=():EAttribute=>{return <EAttribute> this.DiagnosticEClass.eStructuralFeatures.at(0);}
		public getAttachment=():EClass=>{return this.AttachmentEClass;}
		
		public getDomainModelReference=():EClass=>{return this.DomainModelReferenceEClass;}
		
		public getDomainModelReference_Segments=():EReference=>{return <EReference> this.DomainModelReferenceEClass.eStructuralFeatures.at(0);}
		public getFeaturePathDomainModelReference=():EClass=>{return this.FeaturePathDomainModelReferenceEClass;}
		
		public getFeaturePathDomainModelReference_DomainModelEFeature=():EReference=>{return <EReference> this.FeaturePathDomainModelReferenceEClass.eStructuralFeatures.at(0);}
		public getFeaturePathDomainModelReference_DomainModelEReferencePath=():EReference=>{return <EReference> this.FeaturePathDomainModelReferenceEClass.eStructuralFeatures.at(1);}
		public getElement=():EClass=>{return this.ElementEClass;}
		
		public getElement_Name=():EAttribute=>{return <EAttribute> this.ElementEClass.eStructuralFeatures.at(0);}
		public getElement_Label=():EAttribute=>{return <EAttribute> this.ElementEClass.eStructuralFeatures.at(1);}
		public getElement_Visible=():EAttribute=>{return <EAttribute> this.ElementEClass.eStructuralFeatures.at(2);}
		public getElement_Enabled=():EAttribute=>{return <EAttribute> this.ElementEClass.eStructuralFeatures.at(3);}
		public getElement_Readonly=():EAttribute=>{return <EAttribute> this.ElementEClass.eStructuralFeatures.at(4);}
		public getElement_Diagnostic=():EReference=>{return <EReference> this.ElementEClass.eStructuralFeatures.at(5);}
		public getElement_Attachments=():EReference=>{return <EReference> this.ElementEClass.eStructuralFeatures.at(6);}
		public getView=():EClass=>{return this.ViewEClass;}
		
		public getView_RootEClass=():EReference=>{return <EReference> this.ViewEClass.eStructuralFeatures.at(0);}
		public getView_Children=():EReference=>{return <EReference> this.ViewEClass.eStructuralFeatures.at(1);}
		public getView_EcorePaths=():EAttribute=>{return <EAttribute> this.ViewEClass.eStructuralFeatures.at(2);}
		public getView_LoadingProperties=():EReference=>{return <EReference> this.ViewEClass.eStructuralFeatures.at(3);}
		public getContainedElement=():EClass=>{return this.ContainedElementEClass;}
		
		public getContainer=():EClass=>{return this.ContainerEClass;}
		
		public getContainer_Children=():EReference=>{return <EReference> this.ContainerEClass.eStructuralFeatures.at(0);}
		public getContainedContainer=():EClass=>{return this.ContainedContainerEClass;}
		
		public getControl=():EClass=>{return this.ControlEClass;}
		
		public getControl_LabelAlignment=():EAttribute=>{return <EAttribute> this.ControlEClass.eStructuralFeatures.at(0);}
		public getControl_DomainModelReference=():EReference=>{return <EReference> this.ControlEClass.eStructuralFeatures.at(1);}
		public getViewModelProperties=():EClass=>{return this.ViewModelPropertiesEClass;}
		
		public getViewModelLoadingProperties=():EClass=>{return this.ViewModelLoadingPropertiesEClass;}
		
		public getViewModelLoadingProperties_InheritableProperties=():EReference=>{return <EReference> this.ViewModelLoadingPropertiesEClass.eStructuralFeatures.at(0);}
		public getViewModelLoadingProperties_NonInheritableProperties=():EReference=>{return <EReference> this.ViewModelLoadingPropertiesEClass.eStructuralFeatures.at(1);}
		public getStringToObjectMapEntry=():EClass=>{return this.StringToObjectMapEntryEClass;}
		
		public getStringToObjectMapEntry_Key=():EAttribute=>{return <EAttribute> this.StringToObjectMapEntryEClass.eStructuralFeatures.at(0);}
		public getStringToObjectMapEntry_Value=():EAttribute=>{return <EAttribute> this.StringToObjectMapEntryEClass.eStructuralFeatures.at(1);}
		public getDateTimeDisplayAttachment=():EClass=>{return this.DateTimeDisplayAttachmentEClass;}
		
		public getDateTimeDisplayAttachment_DisplayType=():EAttribute=>{return <EAttribute> this.DateTimeDisplayAttachmentEClass.eStructuralFeatures.at(0);}
		public getHasTooltip=():EClass=>{return this.HasTooltipEClass;}
		
		public getHasTooltip_Tooltip=():EAttribute=>{return <EAttribute> this.HasTooltipEClass.eStructuralFeatures.at(0);}
		public getDomainModelReferenceSegment=():EClass=>{return this.DomainModelReferenceSegmentEClass;}
		
		public getFeatureDomainModelReferenceSegment=():EClass=>{return this.FeatureDomainModelReferenceSegmentEClass;}
		
		public getFeatureDomainModelReferenceSegment_DomainModelFeature=():EAttribute=>{return <EAttribute> this.FeatureDomainModelReferenceSegmentEClass.eStructuralFeatures.at(0);}
		public getLabelAlignment=():EEnum=>{return this.LabelAlignmentEEnum;}
		public getDateTimeDisplayType=():EEnum=>{return this.DateTimeDisplayTypeEEnum;}
		
		/*
		public static Literals = {
			DIAGNOSTIC: ModelPackageImpl.eINSTANCE.getDiagnostic(), 
			
			ATTACHMENT: ModelPackageImpl.eINSTANCE.getAttachment(), 
			
			DOMAINMODELREFERENCE: ModelPackageImpl.eINSTANCE.getDomainModelReference(), 
			
			FEATUREPATHDOMAINMODELREFERENCE: ModelPackageImpl.eINSTANCE.getFeaturePathDomainModelReference(), 
			
			ELEMENT: ModelPackageImpl.eINSTANCE.getElement(), 
			
			VIEW: ModelPackageImpl.eINSTANCE.getView(), 
			
			CONTAINEDELEMENT: ModelPackageImpl.eINSTANCE.getContainedElement(), 
			
			CONTAINER: ModelPackageImpl.eINSTANCE.getContainer(), 
			
			CONTAINEDCONTAINER: ModelPackageImpl.eINSTANCE.getContainedContainer(), 
			
			CONTROL: ModelPackageImpl.eINSTANCE.getControl(), 
			
			LABELALIGNMENT: ModelPackageImpl.eINSTANCE.getLabelAlignment(), 
			VIEWMODELLOADINGPROPERTIES: ModelPackageImpl.eINSTANCE.getViewModelLoadingProperties(), 
			
			STRINGTOOBJECTMAPENTRY: ModelPackageImpl.eINSTANCE.getStringToObjectMapEntry(), 
			
			VIEWMODELPROPERTIES: ModelPackageImpl.eINSTANCE.getViewModelProperties(), 
			
			DATETIMEDISPLAYTYPE: ModelPackageImpl.eINSTANCE.getDateTimeDisplayType(), 
			DATETIMEDISPLAYATTACHMENT: ModelPackageImpl.eINSTANCE.getDateTimeDisplayAttachment(), 
			
			HASTOOLTIP: ModelPackageImpl.eINSTANCE.getHasTooltip(), 
			
			DOMAINMODELREFERENCESEGMENT: ModelPackageImpl.eINSTANCE.getDomainModelReferenceSegment(), 
			
			FEATUREDOMAINMODELREFERENCESEGMENT: ModelPackageImpl.eINSTANCE.getFeatureDomainModelReferenceSegment(), 
			
			DIAGNOSTIC_DIAGNOSTICS: ModelPackageImpl.eINSTANCE.getDiagnostic_Diagnostics(), 
			DOMAINMODELREFERENCE_SEGMENTS: ModelPackageImpl.eINSTANCE.getDomainModelReference_Segments(), 
			FEATUREPATHDOMAINMODELREFERENCE_DOMAINMODELEFEATURE: ModelPackageImpl.eINSTANCE.getFeaturePathDomainModelReference_DomainModelEFeature(), 
			FEATUREPATHDOMAINMODELREFERENCE_DOMAINMODELEREFERENCEPATH: ModelPackageImpl.eINSTANCE.getFeaturePathDomainModelReference_DomainModelEReferencePath(), 
			ELEMENT_NAME: ModelPackageImpl.eINSTANCE.getElement_Name(), 
			ELEMENT_LABEL: ModelPackageImpl.eINSTANCE.getElement_Label(), 
			ELEMENT_VISIBLE: ModelPackageImpl.eINSTANCE.getElement_Visible(), 
			ELEMENT_ENABLED: ModelPackageImpl.eINSTANCE.getElement_Enabled(), 
			ELEMENT_READONLY: ModelPackageImpl.eINSTANCE.getElement_Readonly(), 
			ELEMENT_DIAGNOSTIC: ModelPackageImpl.eINSTANCE.getElement_Diagnostic(), 
			ELEMENT_ATTACHMENTS: ModelPackageImpl.eINSTANCE.getElement_Attachments(), 
			VIEW_ROOTECLASS: ModelPackageImpl.eINSTANCE.getView_RootEClass(), 
			VIEW_CHILDREN: ModelPackageImpl.eINSTANCE.getView_Children(), 
			VIEW_ECOREPATHS: ModelPackageImpl.eINSTANCE.getView_EcorePaths(), 
			VIEW_LOADINGPROPERTIES: ModelPackageImpl.eINSTANCE.getView_LoadingProperties(), 
			CONTAINER_CHILDREN: ModelPackageImpl.eINSTANCE.getContainer_Children(), 
			CONTROL_LABELALIGNMENT: ModelPackageImpl.eINSTANCE.getControl_LabelAlignment(), 
			CONTROL_DOMAINMODELREFERENCE: ModelPackageImpl.eINSTANCE.getControl_DomainModelReference(), 
			VIEWMODELLOADINGPROPERTIES_INHERITABLEPROPERTIES: ModelPackageImpl.eINSTANCE.getViewModelLoadingProperties_InheritableProperties(), 
			VIEWMODELLOADINGPROPERTIES_NONINHERITABLEPROPERTIES: ModelPackageImpl.eINSTANCE.getViewModelLoadingProperties_NonInheritableProperties(), 
			STRINGTOOBJECTMAPENTRY_KEY: ModelPackageImpl.eINSTANCE.getStringToObjectMapEntry_Key(), 
			STRINGTOOBJECTMAPENTRY_VALUE: ModelPackageImpl.eINSTANCE.getStringToObjectMapEntry_Value(), 
			DATETIMEDISPLAYATTACHMENT_DISPLAYTYPE: ModelPackageImpl.eINSTANCE.getDateTimeDisplayAttachment_DisplayType(), 
			HASTOOLTIP_TOOLTIP: ModelPackageImpl.eINSTANCE.getHasTooltip_Tooltip(), 
			FEATUREDOMAINMODELREFERENCESEGMENT_DOMAINMODELFEATURE: ModelPackageImpl.eINSTANCE.getFeatureDomainModelReferenceSegment_DomainModelFeature(), 
			LABELALIGNMENT: ModelPackageImpl.eINSTANCE.getLabelAlignment(), 
			DATETIMEDISPLAYTYPE: ModelPackageImpl.eINSTANCE.getDateTimeDisplayType()
		}
		*/
		

 
}
