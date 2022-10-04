import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  viewLoader = false;

  constructor() {}

  objectToString(obj: any) {
    let str = "";
    for (const index in obj) {
      str += `${index}=${obj[index]}&`;
    }

    str = str.substring(0, str.length - 1);

    return str;
  }

  showLoader() {
    this.viewLoader = true;
  }

  hideLoader() {
    this.viewLoader = false;
  }
}
