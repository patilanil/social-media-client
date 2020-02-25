import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService, UserModel } from '../users.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

totalLength: number = 0;
id: number;

constructor(private userService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
}

displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email', 'action'];
  dataSource = new MatTableDataSource<UserModel>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=> {
      this.id = params.id;
      this.getuserFriends(params.id)
    })
    this.dataSource.paginator = this.paginator;
  }


  getuserFriends(id) {
    this.userService.getuserFriend(id).subscribe((users: UserModel[]) => {
      this.totalLength = users.length;
      this.dataSource = new MatTableDataSource<UserModel>(users);
    })
  }

  public navigateToFriendFriends(element): void {
    this.router.navigate(['friend-friends', this.id, { id2: element.id }]);
  }

  public navigateBack(element): void {
    this.router.navigate(['/']);
  }
}
