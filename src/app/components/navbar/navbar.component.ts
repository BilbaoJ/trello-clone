import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BtnComponent } from "../btn/btn.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    imports: [RouterLink, BtnComponent]
})
export class NavbarComponent {

}
