import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByAuthor',
})
export class FilterByAuthorPipe implements PipeTransform {
  transform(items: any[], term?: any): any {
    if (term) {
      return items.filter((item) => item.by.indexOf(term) !== -1);
    }
    return items;
  }
}
