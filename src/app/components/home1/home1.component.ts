import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

declare function addEventListener():void;
declare function animarContadores():void;

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  constructor( public _CargaScripts:CargarScriptsService) {
    _CargaScripts.Carga(['js/home']);
   }

  ngOnInit(): void {
    addEventListener();
    animarContadores();
  }


}
