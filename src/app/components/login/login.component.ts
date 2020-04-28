import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/shared/services/local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,private local: LocalService) { }

  ngOnInit() {
  }

  goToInformation(){
    this.local.setProgress('Information');
    this.route.navigateByUrl('home/client');
  }

  goTojda(){
    this.local.setProgress('Jda');
    this.route.navigateByUrl('home/jda');
  }

}
