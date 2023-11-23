export type Student={
  name:string;
  surname:string;
  index_nr:number;
}

export class StudentClass{
  public adres!: string;
  public grupa!: string;
  public stypendium!: number;
  public marks:number[];
  

  constructor(private name:string, private surname:string, private index_nr:number, public dataUrodzenia: Date){
    this.dataUrodzenia=dataUrodzenia;
    this.marks=[];
  }

  

  get Name():string{
    return this.name
  }

  set Name(name:string){
    this.name=name;
  }
  
  get Surname():string{
    return this.surname
  }

  set Surname(surname:string){
    this.surname=surname;
  }

  get Index_nr():number{
    return this.index_nr;
  }

  set Index_nr(index_nr:number){
    this.index_nr=index_nr;
  }

   getMark(ind:number):number{
    return this.marks[ind];
  }

  addMark(mark:number):void{
    this.marks.push(mark);
  }
}