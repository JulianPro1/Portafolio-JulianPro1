import { Component } from '@angular/core';
import { RouterOutlet , RouterLink} from '@angular/router';
import { LogoSideBarComponent } from "./logo-side-bar/logo-side-bar.component";
import { NavegationComponent } from "./navegation/navegation.component";
import PresentationComponent from "./presentation/presentation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LogoSideBarComponent, RouterLink, NavegationComponent, PresentationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-portafolio';
}
