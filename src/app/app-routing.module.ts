import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendFriendsComponent } from './friend-friends/friend-friends.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'friends/:id', component: FriendsComponent },
  { path: 'friend-friends/:id', component: FriendFriendsComponent },
  // { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
