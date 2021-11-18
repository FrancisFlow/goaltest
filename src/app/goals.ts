export class Goal {
    showdescription:boolean;

    constructor( public id:number,
    public name:string,
    public description:string,
    public aDate:Date) {
        this.showdescription=false;
    }
}
