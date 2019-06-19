export class Init {
    load() {
      if(localStorage.getItem('inventarios') === null || localStorage.getItem('inventarios') == undefined) {
        console.log('No inventarios Found... Creating...');
        let emps = [
          {
            id:1,
            firstName:'Almacen 1',
            lastName:'Panigrahi',
            languages: ['Hindi','English']
          }, 
          {
            id:2,
            firstName:'Alamcen2',
            lastName:'Singh',
            languages: ['Hindi','Marathi']
          }, {
            id:3,
            firstName:'Alamcen 3',
            lastName:'Rathod',
            languages: ['Hindi','English','Marathi']
          },
        ];
  
        localStorage.setItem('inventarios', JSON.stringify(emps));
        return 
      } else {
        console.log('Found inventarios...');
      }
    }
  }