import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-menu-arbitros',
  templateUrl: './menu-arbitros.component.html',
  styleUrls: ['./menu-arbitros.component.css']
})
export class MenuArbitrosComponent implements OnInit {
  @Output()  newItemEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  cambiaOpc(opc: string){
    this.newItemEvent.emit(opc);
  }
}
