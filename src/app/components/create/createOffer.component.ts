import { Component, OnInit } from '@angular/core';
import { ConnestionService } from '../../services/connestion.service'
import { Offer } from 'src/app/models/Offer';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';


@Component({
  selector: 'app-create',
  templateUrl: './createOffer.component.html',
  styleUrls: ['./createOffer.component.css']
})
export class CreateOfferComponent implements OnInit {


  offer: Offer = {
    id:'',
    city: '',
    street: '',
    property: '',
    apartment: '',
    price: 0,
    type: 0,
    description: ''
  };

  constructor(private connectionService: ConnestionService, private router: Router, private messageService:  MessageService, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
  }

  saveNewOffer() {

    this.connectionService.create(this.offer)
      .subscribe(
        res => {
         // console.log(res),
          this.messageService.success("Created")
          this.router.navigate(['/getAll']);

        },
        err => {
          console.error(err),
          this.messageService.error("Error")

        }
      );
    }
  }
