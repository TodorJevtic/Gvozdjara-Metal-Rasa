import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProizvodService } from '../../../services/proizvod.service';
import { Proizvod } from '../../../models/Proizvod';

@Component({
  selector: 'app-rasveta',
  templateUrl: './rasveta.component.html',
  styleUrl: './rasveta.component.css'
})
export class RasvetaComponent implements OnInit{

  searchtext: any;
  proizvodi:Proizvod[] = [];

  constructor(private proizvodService: ProizvodService, activatedRoute:ActivatedRoute){
    let proizvodObservable:Observable<Proizvod[]>;
    activatedRoute.params.subscribe((params)=>{

      proizvodObservable = proizvodService.getRasveta();
      proizvodObservable.subscribe((serverProizvod) => {
        this.proizvodi = serverProizvod;
      })
    })
  }

  ngOnInit(): void {
  }

}
