import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService, UserModel } from '../users.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

userName = "Anil";
totalLength: number = 0;
constructor(private userService: UsersService, private router: Router) {
}

displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email', 'action'];
  dataSource = new MatTableDataSource<UserModel>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getUsers();
  }

  private getUsers(): void {
    this.userService.getAllusers().subscribe((users: UserModel[]) => {
      this.totalLength = users.length;
      this.dataSource = new MatTableDataSource<UserModel>(users);
    })
  }

  public navigateToFriends(element): void {
    this.router.navigate(['friends', element.id]);
  }
}




