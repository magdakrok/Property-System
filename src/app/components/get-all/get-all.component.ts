import { Component, OnInit } from '@angular/core';
import { ConnestionService } from 'src/app/services/connestion.service';
import { Offer } from 'src/app/models/Offer';
import { MessageService } from 'src/app/services/message.service';
import {map} from 'rxjs/operators';



@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent implements OnInit {
  offer: Offer[] = [];
  constructor(private connectionService: ConnestionService, private messageService:  MessageService ) { }

  ngOnInit() {
    this.getOffer();
  }


  getOffer() {
    this.connectionService.getAll()
      .subscribe(res =>{
        console.log(res);
        
      this.offer = res;
       
      
      

        //this.offer = Array.of(res);
      })
  }

  deleteOne(id: number) {
    this.connectionService.deleteOne(id).subscribe(
      res => {
       // console.log(res);
        this.messageService.success("Deleted");
        this.getOffer()

      },
      err => 
      this.messageService.error("Error")
    )
  }

  deleteAllOffers() {
    this.connectionService.deleteAll().subscribe(
      res => {
        //console.log(res);
        this.messageService.success("Deleted");
        this.getOffer();
      },
      err => this.messageService.error("Error")
    )
  }
}




