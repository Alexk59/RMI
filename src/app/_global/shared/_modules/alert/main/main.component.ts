import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-shared-alert",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class AlertComponent implements OnInit {
  @Input() options: any;
  @Output() callback = new EventEmitter();

  constructor() {}

  ngOnInit() {
    if (!this.options.text) {
      this.options.text = "Default text";
    }
  }

  close(id: string) {
    this.callback.emit(id);
  }
}
