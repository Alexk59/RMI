import { Injectable } from "@angular/core";
import { UsersModule } from "../users.module";
import { HttpClient } from "@angular/common/http";
import { GlobalService } from "../../_global/_services/global.service";

@Injectable({
  providedIn: UsersModule,
})
export class ServiceService {
  constructor(private http: HttpClient, private servGlobal: GlobalService) {}

  showUsersAlert() {
    alert("Hi from user's service");
  }

  getApi() {
    this.servGlobal.showLoader();
    const request = this.http.get("https://reqres.in/api/users?page=2");

    setTimeout(() => {
      request.subscribe((response: any) => {
        console.log(response);
        this.servGlobal.hideLoader();
      });
    }, 3000);
  }
}
