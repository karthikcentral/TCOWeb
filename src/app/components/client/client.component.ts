import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LocalService } from 'src/app/shared/services/local.service';
import { clientInput } from 'src/app/shared/mode';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  client:clientInput;

  constructor(private route:Router , private local: LocalService) { }

  ngOnInit() {
    this.client = new clientInput();
    console.log(this.client);
  }

  goToLogin(){
    this.local.setClient(this.client);
    this.local.setProgress('Client');
    this.route.navigateByUrl('home/login');
  }

}
