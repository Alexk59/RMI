import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { HighlightDirective } from "../_directives/highlight.directive";
import { SidebarComponent } from "./_components/sidebar/sidebar.component";
import { HeaderComponent } from "./_components/header/header.component";
import { FooterComponent } from "./_components/footer/footer.component";
import { MainComponent } from "./_components/main/main.component";
import { FormsComponent } from './_components/forms/forms.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HighlightDirective,
    FormsComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [MainComponent],
})
export class SystemModule {}
