import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

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

  @ViewChild("templateModalViewChild", { static: true })
  templateModal: TemplateRef<any>;
  modalRef: BsModalRef;

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
    this.modalRef = this.modal.show(this.templateModal);
  }

  openModalParam(template: TemplateRef<any>) {
    this.modalRef = this.modal.show(template);
  }
}
