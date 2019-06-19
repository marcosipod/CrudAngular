
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCreateComponent } from './employee-crud/employee-create/employee-create.component';
import { EmployeeListComponent } from './employee-crud/employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-crud/employee-edit/employee-edit.component';

import { ProveedorListComponent } from './proveedor-crud/proveedor-list/proveedor-list.component';
import { ProveedorCreateComponent } from './proveedor-crud/proveedor-create/proveedor-create.component';
import { ProveedorEditComponent } from './proveedor-crud/proveedor-edit/proveedor-edit.component';

import { ProductoListComponent } from './producto-crud/producto-list/producto-list.component';
import { ProductoCreateComponent } from './producto-crud/producto-create/producto-create.component';
import { ProductoEditComponent } from './producto-crud/producto-edit/producto-edit.component';

import { TiendaListComponent } from './tienda-crud/tienda-list/tienda-list.component';
import { TiendaCreateComponent } from './tienda-crud/tienda-create/tienda-create.component';
import { TiendaEditComponent } from './tienda-crud/tienda-edit/tienda-edit.component';

import { InventarioListComponent } from './inventario-crud/inventario-list/inventario-list.component';
import { InventarioCreateComponent } from './inventario-crud/inventario-create/inventario-create.component';
import { InventarioEditComponent } from './inventario-crud/inventario-edit/inventario-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    ProveedorCreateComponent,
    ProveedorListComponent,
    ProveedorEditComponent,
    ProductoCreateComponent,
    ProductoListComponent,
    ProductoEditComponent,
    TiendaCreateComponent,
    TiendaListComponent,
    TiendaEditComponent,
    InventarioCreateComponent,
    InventarioListComponent,
    InventarioEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
