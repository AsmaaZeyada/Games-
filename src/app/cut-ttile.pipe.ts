import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutTtile'
})
export class CutTtilePipe implements PipeTransform {

  transform(overview:string , limit:number):string {
    return overview.split(' ').slice(0,limit).join(' ')
  }

}
