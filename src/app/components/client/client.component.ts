import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LocalService } from 'src/app/shared/services/local.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(private route:Router , private local: LocalService) { }

  ngOnInit() {
  }

  goToLogin(){
    this.local.setProgress('Client');
    this.route.navigateByUrl('home/login');
  }

}
