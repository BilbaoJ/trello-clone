import { Component, inject } from '@angular/core';
import { UsersService } from '@services/users.service';
import { DataSourceUser } from './data-source';
import { CommonModule } from '@angular/common';
import {CdkTableModule} from '@angular/cdk/table';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { User } from '@shared/models/user.model';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [CommonModule, CdkTableModule, NavbarComponent],
  templateUrl: './users-table.component.html',
})
export class UsersTableComponent {

  private userService = inject(UsersService);
  private authService = inject(AuthService);
  dataSource = new DataSourceUser();
  columns: string[] = ['id', 'avatar', 'name', 'email'];
  user: User | null = null;


  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(users => {
      this.dataSource.init(users);
    });
    this.authService.user$
    .subscribe((user) => {
      this.user = user
    });
  }

}
