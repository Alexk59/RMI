import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AlertModule } from "./_modules/alert/alert.module";
// import { AlertModule } from "ngx-bootstrap/alert";
import { PopoverModule } from "ngx-bootstrap/popover";
import { ModalModule } from "ngx-bootstrap/modal";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { PhoneInputComponent } from "./_components/phone-input/phone-input.component";

@NgModule({
  declarations: [PhoneInputComponent],
  imports: [
    CommonModule,
    // AlertModule.forRoot(),
    PopoverModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule,
  ],
  exports: [
    AlertModule,
    PopoverModule,
    ModalModule,
    BsDropdownModule,
    PhoneInputComponent,
  ],
})
export class SharedModule {}
