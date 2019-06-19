import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-proveedor-list',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.css']
})
export class ProveedorListComponent implements OnInit {
  emps;
  constructor(private empService: ProveedorService) { }

  ngOnInit() {
    this.emps = this.empService.getProveedors();
  }

  deleteProveedor(id) {
    for(let i = 0; i < this.emps.length; i++) {
      if(this.emps[i].id == id) {
          this.emps.splice(i, 1);
      }
    }

    this.empService.deleteProveedor(id);
  }

}
