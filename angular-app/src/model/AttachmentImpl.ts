import {Set} from "ecore/Set";
import {Attachment} from "./Attachment";
import {AttachmentBase} from "./AttachmentBase";
/* import Ecore*/
export class AttachmentImpl
extends AttachmentBase
{
	public static allInstances_:Set<Attachment> = new Set<Attachment>();
	//implement your generated class here
}
