import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'transformBoolean'})
@Injectable({providedIn: 'root'})
export class TransformBoolean implements PipeTransform {
  transform(value : boolean): string {
    if (value) {
        return "Yes"
    }
    else {
        return "No"
    }
  }

}