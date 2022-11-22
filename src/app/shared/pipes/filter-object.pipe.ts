import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterObject'
})
export class FilterObjectPipe implements PipeTransform {

  transform(list: any[], filter: string = '', key: any, numberPage: number = 1): any[] {

    if(filter.length === 0) {
      return list.slice(numberPage, numberPage + 20);
    }

    const toLowerCaseFilter: string = filter.toLowerCase().trim();

    const filteredList: any[] = list.filter((element: any) => 
    element[key].toLowerCase().includes(toLowerCaseFilter));

    return filteredList.slice(numberPage, numberPage + 20);
  }

}
