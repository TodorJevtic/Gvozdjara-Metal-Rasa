import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProizvodService } from '../../../services/proizvod.service';
import { Proizvod } from '../../../models/Proizvod';


@Component({
  selector: 'app-alati',
  templateUrl: './alati.component.html',
  styleUrl: './alati.component.css'
})
export class AlatiComponent implements OnInit{

  searchtext: any;
  proizvodi:Proizvod[] = [];

  constructor(private proizvodService: ProizvodService, activatedRoute:ActivatedRoute){
    let proizvodObservable:Observable<Proizvod[]>;
    activatedRoute.params.subscribe((params)=>{

      proizvodObservable = proizvodService.getAlati();
      proizvodObservable.subscribe((serverProizvod) => {
        this.proizvodi = serverProizvod;
      })
    })
  }

  ngOnInit(): void {
  }

}

