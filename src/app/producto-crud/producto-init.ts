export class Init {
    load() {
      if(localStorage.getItem('productos') === null || localStorage.getItem('productos') == undefined) {
        console.log('No productos Found... Creating...');
        let emps = [
          {
            id:1,
            nombre:'jjjjj',
            precio:'845',
            cantidad: '5',
            proveedor: 'yese'
          }, 
          {
             id:2,
            nombre:'kkkk',
            precio:'846',
            cantidad: '6',
            proveedor: 'ye'
          }, {
            id:3,
            nombre:'llll',
            precio:'847',
            cantidad: '7',
            proveedor: 'yes'
          },
        ];
  
        localStorage.setItem('productos', JSON.stringify(emps));
        return 
      } else {
        console.log('Found productos...');
      }
    }
  }