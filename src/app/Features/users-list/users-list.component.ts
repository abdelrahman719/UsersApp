import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Core/services/users.service';
import { user } from '../../Core/interfaces/user.interface';
import { Router } from '@angular/router';
import { Observable, map, startWith, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserFilterPipe } from '../../Shared/pipes/filter.pipe';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, FormsModule, UserFilterPipe, InputTextModule, ButtonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {

  usersList$: Observable<any> = new Observable();
  searchKey: any;
  pageNo: number = 1;
  totalPages:number=0;
  constructor(private usersService: UsersService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getUsers(this.pageNo)
  }
  getUsers(pageNo: number) {
    this.usersList$ = this.usersService.getUsers(pageNo)
      .pipe(
        tap((res:any)=>{
          this.totalPages = res.total_pages
        })
        ,map((res: any) => res.data)
        , tap(users => {
        
          localStorage.setItem('USERS_CACHE', JSON.stringify(users));
        })
        , startWith(
          JSON.parse(localStorage.getItem('USERS_CACHE') || '[]')
        )
      )
  }
  navigateToProfile(id: number) {
    this.router.navigate(['/', 'profile', id])
  }

  nextPage() {
    if(this.pageNo < this.totalPages){

      this.pageNo++;
      this.getUsers(this.pageNo)
    }
  }
  prevPage() {
    if (this.pageNo > 1) {

      this.pageNo--;
      this.getUsers(this.pageNo)
    }
  }
}
