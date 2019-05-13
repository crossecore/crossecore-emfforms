import {Set} from "ecore/Set";
import {ContainerBase} from "./ContainerBase";
import {Container} from "./Container";
/* import Ecore*/
export class ContainerImpl
extends ContainerBase
{
	public static allInstances_:Set<Container> = new Set<Container>();
	//implement your generated class here
}
