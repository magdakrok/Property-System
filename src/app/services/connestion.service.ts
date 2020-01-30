import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { CreateOfferComponent } from '../components/create/createOffer.component';
import { Offer} from '../models/Offer';
import { Key } from 'protractor';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ConnestionService {

 

  constructor(private httpClient: HttpClient) { }


  create(offer){
    return this.httpClient.post<{[id: string]: Offer}>(`https://space-tourist-flights.firebaseio.com/Offer.json`, offer);
  }

  update(id: string, offer){
    console.log("Update " );
    //this.deleteOne(id);
    return this.httpClient.put(`https://space-tourist-flights.firebaseio.com/Offer/${id}.json`, offer);
      
    
  }


  getAll(){
    
      return this.httpClient.get<{[id: string]: Offer}>('https://space-tourist-flights.firebaseio.com/Offer.json').pipe(
        map(responseData =>{
          //(responseData: {[key: string]: Offer}) => {
          const dataArray: Offer[] = [];
          for(const key in responseData){
            if(responseData.hasOwnProperty(key)){
              dataArray.push({...responseData[key], id: key});
            }
          }
          return dataArray;
        })
      );
  }

  getOne(id: string){
    return this.httpClient.get(`https://space-tourist-flights.firebaseio.com/Offer/${id}.json`);
     
  }

  deleteAll(){
    return this.httpClient.delete(`https://space-tourist-flights.firebaseio.com/Offer.json`);
  }

  deleteOne(id: number){
    return this.httpClient.delete(`https://space-tourist-flights.firebaseio.com/Offer/${id}.json`);
  }

  
}
