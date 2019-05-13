export class ModelPackageLiterals{
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
	public static FEATUREPATHDOMAINMODELREFERENCE_FEATURE_COUNT:number = ModelPackageLiterals.DOMAINMODELREFERENCE_FEATURE_COUNT + 2;
	public static FEATUREPATHDOMAINMODELREFERENCE_OPERATION_COUNT:number = ModelPackageLiterals.DOMAINMODELREFERENCE_OPERATION_COUNT + 0;
	
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
	public static VIEW_FEATURE_COUNT:number = ModelPackageLiterals.ELEMENT_FEATURE_COUNT + 4;
	public static VIEW_OPERATION_COUNT:number = ModelPackageLiterals.ELEMENT_OPERATION_COUNT + 0;
	
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
	public static CONTAINEDELEMENT_FEATURE_COUNT:number = ModelPackageLiterals.ELEMENT_FEATURE_COUNT + 0;
	public static CONTAINEDELEMENT_OPERATION_COUNT:number = ModelPackageLiterals.ELEMENT_OPERATION_COUNT + 0;
	
	public static CONTAINEDELEMENT_NAME:number = 0;
	public static CONTAINEDELEMENT_LABEL:number = 1;
	public static CONTAINEDELEMENT_VISIBLE:number = 2;
	public static CONTAINEDELEMENT_ENABLED:number = 3;
	public static CONTAINEDELEMENT_READONLY:number = 4;
	public static CONTAINEDELEMENT_DIAGNOSTIC:number = 5;
	public static CONTAINEDELEMENT_ATTACHMENTS:number = 6;
	
	public static CONTAINER:number = 7;
	public static CONTAINER_FEATURE_COUNT:number = ModelPackageLiterals.ELEMENT_FEATURE_COUNT + 1;
	public static CONTAINER_OPERATION_COUNT:number = ModelPackageLiterals.ELEMENT_OPERATION_COUNT + 0;
	
	public static CONTAINER_NAME:number = 0;
	public static CONTAINER_LABEL:number = 1;
	public static CONTAINER_VISIBLE:number = 2;
	public static CONTAINER_ENABLED:number = 3;
	public static CONTAINER_READONLY:number = 4;
	public static CONTAINER_DIAGNOSTIC:number = 5;
	public static CONTAINER_ATTACHMENTS:number = 6;
	public static CONTAINER_CHILDREN:number = 7;
	
	public static CONTAINEDCONTAINER:number = 8;
	public static CONTAINEDCONTAINER_FEATURE_COUNT:number = ModelPackageLiterals.CONTAINEDELEMENT_FEATURE_COUNT + ModelPackageLiterals.CONTAINER_FEATURE_COUNT + 0;
	public static CONTAINEDCONTAINER_OPERATION_COUNT:number = ModelPackageLiterals.CONTAINEDELEMENT_OPERATION_COUNT + ModelPackageLiterals.CONTAINER_OPERATION_COUNT + 0;
	
	public static CONTAINEDCONTAINER_NAME:number = 0;
	public static CONTAINEDCONTAINER_LABEL:number = 1;
	public static CONTAINEDCONTAINER_VISIBLE:number = 2;
	public static CONTAINEDCONTAINER_ENABLED:number = 3;
	public static CONTAINEDCONTAINER_READONLY:number = 4;
	public static CONTAINEDCONTAINER_DIAGNOSTIC:number = 5;
	public static CONTAINEDCONTAINER_ATTACHMENTS:number = 6;
	public static CONTAINEDCONTAINER_CHILDREN:number = 7;
	
	public static CONTROL:number = 9;
	public static CONTROL_FEATURE_COUNT:number = ModelPackageLiterals.CONTAINEDELEMENT_FEATURE_COUNT + 2;
	public static CONTROL_OPERATION_COUNT:number = ModelPackageLiterals.CONTAINEDELEMENT_OPERATION_COUNT + 0;
	
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
	public static VIEWMODELLOADINGPROPERTIES_FEATURE_COUNT:number = ModelPackageLiterals.VIEWMODELPROPERTIES_FEATURE_COUNT + 2;
	public static VIEWMODELLOADINGPROPERTIES_OPERATION_COUNT:number = ModelPackageLiterals.VIEWMODELPROPERTIES_OPERATION_COUNT + 0;
	
	public static VIEWMODELLOADINGPROPERTIES_INHERITABLEPROPERTIES:number = 0;
	public static VIEWMODELLOADINGPROPERTIES_NONINHERITABLEPROPERTIES:number = 1;
	
	public static STRINGTOOBJECTMAPENTRY:number = 12;
	public static STRINGTOOBJECTMAPENTRY_FEATURE_COUNT:number = 2;
	public static STRINGTOOBJECTMAPENTRY_OPERATION_COUNT:number = 0;
	
	public static STRINGTOOBJECTMAPENTRY_KEY:number = 0;
	public static STRINGTOOBJECTMAPENTRY_VALUE:number = 1;
	
	public static DATETIMEDISPLAYATTACHMENT:number = 15;
	public static DATETIMEDISPLAYATTACHMENT_FEATURE_COUNT:number = ModelPackageLiterals.ATTACHMENT_FEATURE_COUNT + 1;
	public static DATETIMEDISPLAYATTACHMENT_OPERATION_COUNT:number = ModelPackageLiterals.ATTACHMENT_OPERATION_COUNT + 0;
	
	public static DATETIMEDISPLAYATTACHMENT_DISPLAYTYPE:number = 0;
	
	public static HASTOOLTIP:number = 16;
	public static HASTOOLTIP_FEATURE_COUNT:number = 1;
	public static HASTOOLTIP_OPERATION_COUNT:number = 0;
	
	public static HASTOOLTIP_TOOLTIP:number = 0;
	
	public static DOMAINMODELREFERENCESEGMENT:number = 17;
	public static DOMAINMODELREFERENCESEGMENT_FEATURE_COUNT:number = 0;
	public static DOMAINMODELREFERENCESEGMENT_OPERATION_COUNT:number = 0;
	
	
	public static FEATUREDOMAINMODELREFERENCESEGMENT:number = 18;
	public static FEATUREDOMAINMODELREFERENCESEGMENT_FEATURE_COUNT:number = ModelPackageLiterals.DOMAINMODELREFERENCESEGMENT_FEATURE_COUNT + 1;
	public static FEATUREDOMAINMODELREFERENCESEGMENT_OPERATION_COUNT:number = ModelPackageLiterals.DOMAINMODELREFERENCESEGMENT_OPERATION_COUNT + 0;
	
	public static FEATUREDOMAINMODELREFERENCESEGMENT_DOMAINMODELFEATURE:number = 0;
	
	public static LABELALIGNMENT:number = 10;
	
	public static DATETIMEDISPLAYTYPE:number = 14;
	
}
