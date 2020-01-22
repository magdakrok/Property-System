import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnestionService } from 'src/app/services/connestion.service';
import { Offer } from 'src/app/models/Offer';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  offer: Offer[];

  constructor(private connectionService: ConnestionService, private activatedRoute: ActivatedRoute, private router: Router, private messageService:  MessageService) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.getOfferOne(params.id);
  }


  getOfferOne(id: number) {
    this.connectionService.getOne(id).
      subscribe((res: Offer[]) => {
        this.offer = res;
        console.log(this.offer);
      })
  }

  updateOffer(id: number) {
    this.connectionService.update(this.offer, id)
      .subscribe(
        res => {
          //console.log(res),
          this.messageService.success("Update")
          this.router.navigate(['/get/', this.offer['id']]);
        },
        err => 
        this.messageService.error("Error")
      );
  }
}
