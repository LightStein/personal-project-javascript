import { IDGenerator } from './IDGenerator.mjs'
const IDGen = new IDGenerator("Teacher")

export class TeachersModel{

    constructor(){
        this.teachers = new Map();
    }

    async add(teacher){
        // creating random ID starting with T (teacher)
        const time = new Date();
        let id = IDGen.getID()
    
        // using update method for both updating and creating purposes
        this.update(id, teacher)
        return id
    }


    async read(targetId){
        // simply returning whole object
        return this.teachers.get(targetId)
    }


    async update(targetId, teacher){
        
        // appending a new teacher data to teachers object {id: Data}
        this.teachers.set(targetId, teacher)
    }

    async remove(targetId){
        this.teachers.delete(targetId)
    }
}