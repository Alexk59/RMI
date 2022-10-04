import { Component, OnInit } from "@angular/core";
import { GlobalService } from "../../../../_global/_services/global.service";
import { ServiceService } from "../../../../users/_services/service.service";

@Component({
  selector: "app-system-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
  providers: [ServiceService],
})
export class MainComponent implements OnInit {
  constructor(
    private servGlobal: GlobalService,
    private servServ: ServiceService
  ) {}

  ngOnInit() {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
    };

    const parsed = this.servGlobal.objectToString(obj);

    // this.servServ.showUsersAlert();
    this.servServ.getApi();
  }
}
