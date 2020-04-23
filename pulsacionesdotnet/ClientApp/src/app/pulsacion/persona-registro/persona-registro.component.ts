import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {

  persona:  Persona;
  constructor(private personaService: PersonaService, private modalService: NgbModal) {}

  ngOnInit() {
    this.persona= new  Persona();
  }

  add() {
    this.personaService.post(this.persona).subscribe(p => {
      if (p != null) {
        //alert('Persona creada!');
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Persona creada!!! :-)';

        this.persona = p;
      }
    });
  }

}
