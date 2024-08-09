import { Component, inject } from '@angular/core';
import { UsersService } from '@services/users.service';
import { DataSourceUser } from './data-source';
import { CommonModule } from '@angular/common';
import {CdkTableModule} from '@angular/cdk/table';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [CommonModule, CdkTableModule],
  templateUrl: './users-table.component.html',
})
export class UsersTableComponent {

  private userService = inject(UsersService);
  dataSource = new DataSourceUser();
  columns: string[] = ['id', 'avatar', 'name', 'email'];


  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(users => {
      this.dataSource.init(users);
    })
  }

}
