import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProizvodService } from '../../../services/proizvod.service';
import { Proizvod } from '../../../models/Proizvod';

@Component({
  selector: 'app-sanitarija',
  templateUrl: './sanitarija.component.html',
  styleUrl: './sanitarija.component.css'
})
export class SanitarijaComponent implements OnInit{

  searchtext: any;
  proizvodi:Proizvod[] = [];

  constructor(private proizvodService: ProizvodService, activatedRoute:ActivatedRoute){
    let proizvodObservable:Observable<Proizvod[]>;
    activatedRoute.params.subscribe((params)=>{

      proizvodObservable = proizvodService.getSanitarija();
      proizvodObservable.subscribe((serverProizvod) => {
        this.proizvodi = serverProizvod;
      })
    })
  }

  ngOnInit(): void {
  }

}
