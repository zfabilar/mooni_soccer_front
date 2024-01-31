import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-informacion-modal',
  templateUrl: './informacion-modal.component.html',
  styleUrls: ['./informacion-modal.component.css']
})
export class InformacionModalComponent implements OnInit {
  @Input() mensaje : string|null = null
  @Output() esperaEvent = new EventEmitter<boolean>();



  pararEspera() {
    this.esperaEvent.emit(false);
  }
  desactivaModal(){
    ($("#infoModal") as any).modal('hide')
  }
  constructor() { }

  ngOnInit(): void {
  }
  eventChange(){
    this.desactivaModal()
    this.pararEspera();
    window.location.reload();
  }

}
