import { ViewChild, Component, OnInit } from '@angular/core';
import { TiendaService } from '../tienda.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tienda-list',
  templateUrl: './tienda-list.component.html',
  styleUrls: ['./tienda-list.component.css']
})
export class TiendaListComponent implements OnInit {
  emps;
  constructor(private empService: TiendaService) { }

  ngOnInit() {
    this.emps = this.empService.getTiendas();
  }

  deleteTienda(id) {
    for(let i = 0; i < this.emps.length; i++) {
      if(this.emps[i].id == id) {
          this.emps.splice(i, 1);
      }
    }

    this.empService.deleteTienda(id);
  }

}
