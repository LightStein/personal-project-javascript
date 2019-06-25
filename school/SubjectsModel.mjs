import { IDGenerator } from './IDGenerator.mjs'
const IDGen = new IDGenerator("Subject")

export class SubjectsModel{
    constructor(obj){
        this.title = obj.title;
        this.lessons = obj.lessons;

        this.id = IDGen.getID();
    }
}