import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { BsModalService } from "ngx-bootstrap/modal";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(private modal: BsModalService) {}

  showSpan = true;
  switchVal = "a";
  myData = [
    { name: "Alex", age: "33" },
    { name: "Alex2", age: "34" },
    { name: "Alex3", age: "35" },
    { name: "Alex4", age: "36" },
    { name: "Alex5", age: "37" },
  ];
  x = 1;
  myStyle = { "background-color": "black", color: "white" };

  @ViewChild("templateModal", { static: true }) templateModal;

  ngOnInit() {}

  print(event: any) {
    console.log(event);
  }

  incrementValue(param: any) {
    console.log(param);
    console.log(param.value);
    this.x++;
  }

  openModal() {
    this.modal.show(this.templateModal);
  }
}
