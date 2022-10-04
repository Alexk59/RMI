import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipes",
  templateUrl: "./pipes.component.html",
  styleUrls: ["./pipes.component.scss"],
})
export class PipesComponent implements OnInit {
  constructor() {}

  name = "alejandro solorio";
  date = new Date();
  description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet nisi ultrices, luctus ligula quis, cursus ante. In venenatis, odio nec ornare semper, purus sem hendrerit metus, ac varius felis lorem nec velit. Proin viverra ligula a imperdiet dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras at felis sagittis metus blandit semper ut non orci. Aenean tincidunt placerat elit, a suscipit orci. Suspendisse sed leo ultricies, tempus eros quis, semper ante. Duis lobortis scelerisque massa. Aenean sodales at tortor eget varius.

In fringilla lobortis felis, vel bibendum ex hendrerit at. Praesent libero orci, egestas ac molestie id, gravida sed tellus. Aliquam commodo sed mi ut tempor. Donec imperdiet, mauris eget placerat mollis, nisi lectus mollis massa, in convallis augue sem non dui. Etiam lobortis neque sit amet nibh rutrum tristique. Nulla nec lacus id odio consectetur tempor ut eget diam. Sed dolor dui, pretium eu varius ut, imperdiet vel arcu. Nam est dui, eleifend elementum est ac, vestibulum sollicitudin ipsum.`;

  ngOnInit() {}
}
