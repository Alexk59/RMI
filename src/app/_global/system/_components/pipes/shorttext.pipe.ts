import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shorttext",
})
export class ShorttextPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (args[0] > 0 && value.length > args[0]) {
      value =
        value.substring(0, args[0]) +
        "...<a href='javascript:void(0)'>view more</a>";
    }

    return value;
  }
}
