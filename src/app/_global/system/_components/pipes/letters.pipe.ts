import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "letters",
})
export class LettersPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (args[0] === "letters") {
      value = value.replace(/[^a-z]/gi, "");
    } else if (args[0] === "numbers") {
      value = value.replace(/[^0-9]/g, "");
    }

    return value;
  }
}
