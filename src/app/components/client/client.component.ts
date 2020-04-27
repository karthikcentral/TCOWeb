import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  goToLogin(){
    this.route.navigateByUrl('jda');
  }

}
