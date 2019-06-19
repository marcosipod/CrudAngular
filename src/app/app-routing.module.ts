import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-crud/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-crud/employee-create/employee-create.component';
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


const routes: Routes = [

  {
    path: '',
    redirectTo: 'proveedor-list',
    pathMatch: 'full'
  },
  {
    path: 'proveedor-list',
    component: ProveedorListComponent,
  },
  {
    path: 'proveedor-create',
    component: ProveedorCreateComponent,
  },
  {
    path: 'proveedor-edit/:id',
    component: ProveedorEditComponent,
  },
  {
    path: '',
    redirectTo: 'producto-list',
    pathMatch: 'full'
  },
  {
    path: 'producto-list',
    component: ProductoListComponent,
  },
  {
    path: 'producto-create',
    component: ProductoCreateComponent,
  },
  {
    path: 'producto-edit/:id',
    component: ProductoEditComponent,
  },
  {
    path: '',
    redirectTo: 'tienda-list',
    pathMatch: 'full'
  },
  {
    path: 'tienda-list',
    component: TiendaListComponent,
  },
  {
    path: 'tienda-create',
    component: TiendaCreateComponent,
  },
  {
    path: 'tienda-edit/:id',
    component: TiendaEditComponent,
  },

   {
    path: '',
    redirectTo: 'inventario-list',
    pathMatch: 'full'
  },
  {
    path: 'inventario-list',
    component: InventarioListComponent,
  },
  {
    path: 'inventario-create',
    component: InventarioCreateComponent,
  },
  {
    path: 'inventario-edit/:id',
    component: InventarioEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
