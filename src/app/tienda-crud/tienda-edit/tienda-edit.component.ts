import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TiendaService } from '../tienda.service';


@Component({
  selector: 'app-tienda-edit',
  templateUrl: './tienda-edit.component.html',
  styleUrls: ['./tienda-edit.component.css']
})
export class TiendaEditComponent implements OnInit {
  emp;
  id;
  constructor(private _Activatedroute:ActivatedRoute,private empService: TiendaService,private router:Router) { }
  @ViewChild("f") form: any;

  ngOnInit() {
    this.id=this._Activatedroute.snapshot.params['id'];
    let emps=this.empService.getTiendas();
    this.emp=emps.find(p => p.id==this.id);
    console.log(this.emp);
  }
  onSubmit() {
    if (this.form.value) {
      console.log(this.form.value)
    this.empService.updateTienda(this.emp,this.form.value);
    this.router.navigate(['tienda-list']);
    }
  }
}
