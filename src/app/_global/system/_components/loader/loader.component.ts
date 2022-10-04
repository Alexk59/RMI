import { Component, OnInit } from "@angular/core";
import { GlobalService } from "../../../../_global/_services/global.service";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"],
})
export class LoaderComponent implements OnInit {
  constructor(public servGlobal: GlobalService) {}

  ngOnInit() {}
}
