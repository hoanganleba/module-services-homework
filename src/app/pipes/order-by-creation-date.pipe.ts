import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'orderByCreationDate',
})
export class OrderByCreationDatePipe implements PipeTransform {
  transform(array: any, order?: string): any[] {
    const sortOrder: any = order ? order : 'desc';
    return orderBy(array, [(obj) => new Date(obj.creationDate)], [sortOrder]);
  }
}
