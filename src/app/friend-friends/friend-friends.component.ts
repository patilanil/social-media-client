import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel, UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-friend-friends',
  templateUrl: './friend-friends.component.html',
  styleUrls: ['./friend-friends.component.css']
})
export class FriendFriendsComponent implements OnInit {

  
totalLength: number = 0;
id: number;
constructor(private userService: UsersService, 
  private router: Router,
  private activatedRoute: ActivatedRoute) {
}

displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email'];
  dataSource = new MatTableDataSource<UserModel>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.id = params.id;
      this.getuserFriendFriends(params.id2)
    })
    this.dataSource.paginator = this.paginator;
  }

  getuserFriendFriends(id) {
    this.userService.getuserFriendFriends(id).subscribe((users: UserModel[]) => {
      this.totalLength = users.length;
      this.dataSource = new MatTableDataSource<UserModel>(users);
    })
  }

  
  public navigateBack(): void {
    this.router.navigate(['friends', this.id]);
  }
}
