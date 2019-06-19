export class Init {
    load() {
      if(localStorage.getItem('proveedores') === null || localStorage.getItem('proveedores') == undefined) {
        console.log('No proveedores Found... Creating...');
        let emps = [
          {
              id:1,
              nombre: 'Marcos',
              apellido: 'Monasterio',
              telefono: '04142426588',
              correo: 'marrcos@correo.com'
          }, 
          {
              id:2,
              nombre: 'Marcos2',
              apellido: 'Monasterio2',
              telefono: '041424265882',
              correo: 'marrcos@correo.com2'
          }, {
            id:3,
              nombre: 'Marcos3',
              apellido: 'Monasterio3',
              telefono: '041424265883',
              correo: 'marrcos@correo.com3'
          },
        ];
  
        localStorage.setItem('proveedores', JSON.stringify(emps));
        return 
      } else {
        console.log('Found proveedores...');
      }
    }
  }