import { Pipe, Injectable, PipeTransform } from "@angular/core";
import { Baby } from "../entities/baby";

@Pipe({name: 'filterBabies'})
@Injectable({providedIn: 'root'})
export class FilterBabies implements PipeTransform {


  transform(items: Baby[], search: string): any {
    // your custom code here

    console.log(items);
    console.log(search);

    if (search !== undefined) {
      return items.filter(x => x.name.toLowerCase().includes(search.toLowerCase()) 
      || x.gender.includes(search));
    }
    return items;
    

    // write a working filter here.
    // firstname, lastname, zipCode, gender


    // Return an array that matches the search criteria
    // return [];
  }

}