import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ConnestionService } from 'src/app/services/connestion.service';
import { Offer } from 'src/app/models/Offer';
import { MessageService } from 'src/app/services/message.service';
import { GetAllComponent } from '../get-all/get-all.component';
import { GetOneComponent } from '../get-one/get-one.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  offer: Offer[];
  paramsId: Offer['id'];
 

  constructor(private connectionService: ConnestionService, private activatedRoute: ActivatedRoute, private router: Router, private messageService:  MessageService) { }

  ngOnInit() {
    const paramsId= this.activatedRoute.snapshot.params.id;
    const params = this.activatedRoute.snapshot.params;
    this.getOfferOne(paramsId);
   
    console.log(paramsId);
  
    

  }

 
  

  getOfferOne(id: string) {
    console.log(id);
    this.connectionService.getOne(id)
      .subscribe((res: Offer[])=>{
        this.offer = res;
      
      //console.log(res);
      })
  }


  updateOffer(id: string) {
    console.log(id);
    this.connectionService.update(id, this.offer)
      .subscribe(
        (res: Offer)=> {
          //console.log(res),
          this.messageService.success("Update")
          this.router.navigate(['/get/']);
        },
        err => 
        this.messageService.error("Error")
      );
  }
}
