import { IDGenerator } from './IDGenerator.mjs'
const IDGen = new IDGenerator("Pupil")

export class PupilsModel{

    constructor(){
        this.pupils = new Map()
    }
    
    async add(pupil){
        // creating random ID starting with P (pupil)
        let id = IDGen.getID();
        
        if (!pupil["description"]){
            pupil["description"] = "no description"
        }
        // using update method for both updating and creating purposes
        this.update(pupil)
        return id
    }


    async read(targetId){
        // simply returning whole object
        return this.pupils.get(targetId)
    }


    async update(targetId, pupil){

        // appending a new pupil data to pupils object {id: Data}
        // this.pupils.set(targetId[["name",_name], ["image",_image], ["dateOfBirth",_dateOfBirth], ["phones",_phones], ["sex",_sex], ["description",_description]])

        this.pupils.set(targetId,pupil)
    }


    async remove(targetId){
        delete this.pupils[targetId]
    }
}

