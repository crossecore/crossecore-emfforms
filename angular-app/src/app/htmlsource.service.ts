import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {EObject} from "../ecore/EObject";

@Injectable({
  providedIn: 'root'
})
export class HtmlsourceService {

  source:BehaviorSubject<string> = new BehaviorSubject<string>("");


  constructor() { }
}
