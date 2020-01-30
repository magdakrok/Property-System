import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/Offer';
import { ConnestionService } from 'src/app/services/connestion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-get-one',
  templateUrl: './get-one.component.html',
  styleUrls: ['./get-one.component.css']
})
export class GetOneComponent implements OnInit {

  offer: Offer[];
  
  constructor(private connectionService: ConnestionService, private router: Router, private activatedRoute: ActivatedRoute, private messageService:  MessageService) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.getOfferOne(params.id);
  }

  getOfferOne(id: string) {
    this.connectionService.getOne(id)
      .subscribe((res: Offer[]) => {
       this.offer = res;
      console.log(res);
      })
  }

  deleteOne(id: number) {
    this.connectionService.deleteOne(id).subscribe(
      res => {
       // console.log(res);
        this.messageService.success("Deleted");
        this.router.navigate(['/getAll']);
        

      },
      err => 
      this.messageService.error("Error")
    )
  }
}
