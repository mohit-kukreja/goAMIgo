export class atmDetails {

    constructor(
    public name: string,
    public vicinity: string,
    public lat:any,
    public lng:any
    
    ) {  }

    toString(){
      return "Name:"+this.name 
    }
  }