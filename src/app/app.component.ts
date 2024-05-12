import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from './Shared/components/progress-bar/progress-bar.component';
import { LoaderService } from './Core/services/loader.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , CommonModule  ,FormsModule ,ProgressBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    HttpClientModule,
  
    
  ],
})
export class AppComponent {
  title = 'frontendEcommerce';
  constructor(  public loaderService: LoaderService){

  }


}
