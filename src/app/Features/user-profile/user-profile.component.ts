import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../Core/services/users.service';
import { user } from '../../Core/interfaces/user.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {

  userData: any;
  targetID: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private location:Location 
  ) {

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      console.log('prams: ', paramMap.get('id'));
      this.targetID = paramMap.get('id')
    })

  }

ngOnInit(): void {
  this.getUserDetails(this.targetID)
}

  getUserDetails(id: number) {
    this.usersService.getUserDetails(id).subscribe({
      next: (res: any) => {
        this.userData = res.data
      }
    })
  }

  back(){
this.location.back()
  }

}
