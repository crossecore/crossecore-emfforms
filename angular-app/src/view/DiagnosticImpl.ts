import {Set} from "ecore/Set";
import {DiagnosticBase} from "./DiagnosticBase";
import {Diagnostic} from "./Diagnostic";
/* import Ecore*/
export class DiagnosticImpl
extends DiagnosticBase
{
	public static allInstances_:Set<Diagnostic> = new Set<Diagnostic>();
	//implement your generated class here
}
