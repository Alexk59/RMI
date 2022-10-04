import { Component, OnInit } from "@angular/core";
import { GlobalService } from ".././../../../_global/_services/global.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  constructor(public servGlobal: GlobalService) {}

  ngOnInit() {
    const obj = {
      x: 6,
      y: 7,
      w: 8,
      z: 9,
    };

    const str = this.servGlobal.objectToString(obj);

    console.log(str);
  }
}
