import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoDone'
})
export class TodoDonePipe implements PipeTransform {
  // 第一個參數是要被 pipe 的 value, 第二個以後是要被轉換的條件參數，可以是任何型態
  // ex用法: {{ item.done | todoDone:true }} <--- 其中 todoDone 分號後面的就是會被傳進 displayNotDone 這個參數位置的值
  transform(todoDone: boolean, displayNotDone: boolean): any {
    if (todoDone) {
      return '(已完成)';
    } else if (displayNotDone) {
      return '(未完成)';
    }
    return '';
  }

}
