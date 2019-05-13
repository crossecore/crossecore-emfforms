import {EFactory} from "ecore/EFactory";
import {Label} from "./Label";
export interface LabelFactory extends EFactory{
	createLabel():Label;
}
