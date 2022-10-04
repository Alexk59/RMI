import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { HighlightDirective } from "../_directives/highlight.directive";
import { SidebarComponent } from "./_components/sidebar/sidebar.component";
import { HeaderComponent } from "./_components/header/header.component";
import { FooterComponent } from "./_components/footer/footer.component";
import { MainComponent } from "./_components/main/main.component";
import { FormsComponent } from "./_components/forms/forms.component";
import { PipesComponent } from "./_components/pipes/pipes.component";
import { LettersPipe } from "./_components/pipes/letters.pipe";
import { ShorttextPipe } from "./_components/pipes/shorttext.pipe";
import { LoaderComponent } from "./_components/loader/loader.component";
import { UsersModule } from "../../users/users.module";

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HighlightDirective,
    FormsComponent,
    PipesComponent,
    LettersPipe,
    ShorttextPipe,
    LoaderComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [MainComponent],
})
export class SystemModule {}
