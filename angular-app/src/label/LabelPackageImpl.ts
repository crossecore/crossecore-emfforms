import {EAttribute} from "ecore/EAttribute";
import {LabelPackage} from "./LabelPackage";
import {EcorePackageImpl} from "ecore/EcorePackageImpl";
import {EReference} from "ecore/EReference";
import {EcoreFactoryImpl} from "ecore/EcoreFactoryImpl";
import {LabelBase} from "./LabelBase";
import {ModelPackageImpl} from "model/ModelPackageImpl";
import {EClass} from "ecore/EClass";
import {EEnum} from "ecore/EEnum";
import {EOperation} from "ecore/EOperation";
import {EFactory} from "ecore/EFactory";
import {EPackageImpl} from "ecore/EPackageImpl";
import {LabelImpl} from "./LabelImpl";
export class LabelPackageImpl extends EPackageImpl implements LabelPackage{
		public static eNAME:string = "label";
		
		public static eNS_URI:string = "http://org/eclipse/emf/ecp/view/label/model";


		public static eNS_PREFIX:string = "org.eclipse.emf.ecp.view.label.model";
		
		
		
		/*
		constructor(){
			//no private constructors in TypeScript
			super(LabelPackageImpl.eNS_URI, LabelFactoryImpl.eINSTANCE as any as EFactory);
		}
		*/
		
		public static init():LabelPackage
		{

	        // Obtain or create and register package
	        let theLabelPackage = new LabelPackageImpl();
	        theLabelPackage.ecorePackage = EcorePackageImpl.eINSTANCE;
	        theLabelPackage.ecoreFactory = EcoreFactoryImpl.eINSTANCE;
	
	        // Create package meta-data objects
	        theLabelPackage.createPackageContents();
	
	        // Initialize created meta-data
	        theLabelPackage.initializePackageContents();

	        return theLabelPackage;
        }
        
        private isCreated:boolean = false;
        
        public createPackageContents = ():void =>
        {
            if (this.isCreated) return;
            this.isCreated = true;
			this.LabelEClass = this.createEClass(LabelPackageImpl.LABEL);
			LabelBase.eStaticClass = this.LabelEClass;
			this.createEAttribute(this.LabelEClass, LabelPackageImpl.LABEL_STYLE);
			this.createEReference(this.LabelEClass, LabelPackageImpl.LABEL_DOMAINMODELREFERENCE);
			
			this.VLabelStyleEEnum = this.createEEnum(LabelPackageImpl.VLABELSTYLE);
			
        }
        private isInitialized:boolean = false;
        public initializePackageContents=():void =>
        {
            if (this.isInitialized) return;
            this.isInitialized = true;
            // Initialize package
            this.name = LabelPackageImpl.eNAME;
            this.nsPrefix = LabelPackageImpl.eNS_PREFIX;
            this.nsURI = LabelPackageImpl.eNS_URI;

			
			this.LabelEClass.eSuperTypes.add(ModelPackageImpl.eINSTANCE.getContainedElement());
			var op:EOperation = null;
			
			this.initEClass(
			this.LabelEClass,
			LabelImpl, 
			"Label", 
			!EPackageImpl.IS_ABSTRACT, 
			!EPackageImpl.IS_INTERFACE, 
			EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			
			this.initEAttribute_EClassifier(
				this.getLabel_Style(), 
				this.getVLabelStyle(), 
				"style", 
				"H0", 
				0, 
				1, 
				LabelImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				!EPackageImpl.IS_UNSETTABLE, 
				!EPackageImpl.IS_ID, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			this.initEReference(
				this.getLabel_DomainModelReference(),
				ModelPackageImpl.eINSTANCE.getDomainModelReference(), 
				null, 
				"domainModelReference", 
				null, 
				0, 
				1, 
				LabelImpl, 
				!EPackageImpl.IS_TRANSIENT, 
				!EPackageImpl.IS_VOLATILE, 
				EPackageImpl.IS_CHANGEABLE, 
				EPackageImpl.IS_COMPOSITE, 
				EPackageImpl.IS_RESOLVE_PROXIES, 
				!EPackageImpl.IS_UNSETTABLE, 
				EPackageImpl.IS_UNIQUE, 
				!EPackageImpl.IS_DERIVED, 
				EPackageImpl.IS_ORDERED);
			
			
			
			//this.initEDataType(this.VLabelStyleEDataType, null, "VLabelStyle", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
			this.initEEnum(this.VLabelStyleEEnum, null, "VLabelStyle");
			
        }
		
		
		private LabelEClass:EClass = null;
		
		
		private VLabelStyleEEnum:EEnum = null;
		
		
		public static LABEL:number = 0;
		public static LABEL_FEATURE_COUNT:number = ModelPackageImpl.CONTAINEDELEMENT_FEATURE_COUNT + 2;
		public static LABEL_OPERATION_COUNT:number = ModelPackageImpl.CONTAINEDELEMENT_OPERATION_COUNT + 0;
		
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
		
		
		/*Important: Call init() AFTER metaobject ids have been assigned.*/
		public static eINSTANCE:LabelPackage = LabelPackageImpl.init();
		
		
		public getLabel=():EClass=>{return this.LabelEClass;}
		
		public getLabel_Style=():EAttribute=>{return <EAttribute> this.LabelEClass.eStructuralFeatures.at(0);}
		public getLabel_DomainModelReference=():EReference=>{return <EReference> this.LabelEClass.eStructuralFeatures.at(1);}
		public getVLabelStyle=():EEnum=>{return this.VLabelStyleEEnum;}
		
		/*
		public static Literals = {
			LABEL: LabelPackageImpl.eINSTANCE.getLabel(), 
			
			VLABELSTYLE: LabelPackageImpl.eINSTANCE.getVLabelStyle(), 
			LABEL_STYLE: LabelPackageImpl.eINSTANCE.getLabel_Style(), 
			LABEL_DOMAINMODELREFERENCE: LabelPackageImpl.eINSTANCE.getLabel_DomainModelReference(), 
			VLABELSTYLE: LabelPackageImpl.eINSTANCE.getVLabelStyle()
		}
		*/
		

 
}
