import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  progressName = 'Information' ;

  constructor() { }

  clientObj ;


  private progressNameSource = new BehaviorSubject('Information');
  progressNameResponse$ = this.progressNameSource.asObservable();

  setProgress(value){
    this.progressNameSource.next(value);
  }


  setClient(client){
    this.clientObj = client;
  }

  getClient(){
    return this.clientObj;
  }

}
