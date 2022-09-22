import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.scss"],
})
export class FormsComponent implements OnInit {
  userType = "normal";
  form: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(
      null,
      Validators.pattern(/52\-[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/)
    ),
    password: new FormControl(null, Validators.required),
    confirmpassword: new FormControl(null, Validators.required),
  });

  constructor() {}

  ngOnInit() {}

  save() {
    if (this.form.invalid) {
      return;
    }
    const data = this.form.getRawValue();

    console.log(data);
  }

  setType(type: string) {
    if (type === "normal") {
      if (this.form.contains("level")) {
        this.form.removeControl("level");
      }
      this.form.controls.phone.setValidators([
        Validators.pattern(/52\-[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/),
      ]);
      this.form.controls.phone.updateValueAndValidity();
    } else if (type === "special") {
      this.form.addControl("level", new FormControl(null, Validators.required));
      this.form.controls.phone.setValidators([
        Validators.pattern(/52\-[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/),
        Validators.required,
      ]);
      this.form.controls.phone.updateValueAndValidity();
    }

    this.userType = type;
  }
}
