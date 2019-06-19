import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedorService } from '../proveedor.service';


@Component({
  selector: 'app-proveedor-edit',
  templateUrl: './proveedor-edit.component.html',
  styleUrls: ['./proveedor-edit.component.css']
})
export class ProveedorEditComponent implements OnInit {
  emp;
  id;
  constructor(private _Activatedroute:ActivatedRoute,private empService: ProveedorService,private router:Router) { }
  @ViewChild("f") form: any;

  ngOnInit() {
    this.id=this._Activatedroute.snapshot.params['id'];
    let emps=this.empService.getProveedors();
    this.emp=emps.find(p => p.id==this.id);
    console.log(this.emp);
  }
  onSubmit() {
    if (this.form.value) {
      console.log(this.form.value)
    this.empService.updateProveedor(this.emp,this.form.value);
    this.router.navigate(['proveedor-list']);
    }
  }
}
