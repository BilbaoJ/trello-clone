import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BtnComponent } from "../btn/btn.component";
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    imports: [RouterLink, BtnComponent, OverlayModule]
})
export class NavbarComponent {

  isOpen : boolean = false;
}
