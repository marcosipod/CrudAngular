export class Init {
    load() {
      if(localStorage.getItem('tiendas') === null || localStorage.getItem('tiendas') == undefined) {
        console.log('No tiendas Found... Creating...');
        let emps = [
          {
            id:1,
            nombre:'tienda 1',
            direccion:'direccion1',
            telefono: '546465654'
          }, 
          {
            id:2,
            nombre:'tienda 2',
            direccion:'direccion2',
            telefono: '685667'
          }, {
            id:3,
            nombre:'tienda 3',
            direccion:'direccion 3',
            telefono: '564654'
          },
        ];
  
        localStorage.setItem('tiendas', JSON.stringify(emps));
        return 
      } else {
        console.log('Found tiendas...');
      }
    }
  }