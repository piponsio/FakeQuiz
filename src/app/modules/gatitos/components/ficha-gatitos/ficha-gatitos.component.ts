import { Component, OnInit } from '@angular/core';

import { gatitosInterface } from '../../interfaces/gatitos';
import { GatitosService } from '../../services/gatitos.service';

@Component({
  selector: 'app-ficha-gatitos',
  templateUrl: './ficha-gatitos.component.html',
  styleUrls: ['./ficha-gatitos.component.css']
})
export class FichaGatitosComponent implements OnInit {

  public gatito:gatitosInterface[] = [];

  constructor(
    private gatitosService:GatitosService
  ) { }

  ngOnInit(): void {
    this.getGatito();
    console.log(this.gatito);
  }

  private getGatito(){
    this.gatitosService.getGatito().subscribe(request => {
      console.log(request);
      this.gatito = request; 
    });
  }

}
