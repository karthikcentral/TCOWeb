import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/shared/services/local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  clientobj;

  constructor(private route:Router,private local: LocalService) { }

  ngOnInit() {
    this.clientobj = this.local.getClient();
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
