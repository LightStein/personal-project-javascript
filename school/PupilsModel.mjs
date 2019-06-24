export class PupilsModel{

    constructor(){
        this.pupils = new Map()
    }
    
    async add(_name, _image, _dateOfBirth, _phones, _sex, _description){
        // creating random ID starting with P (pupil)
        const time = new Date();
        let id = "P"+((time.getMinutes() * time.getMilliseconds()).toString());
        
        // using update method for both updating and creating purposes
        this.update(id, _name, _image, _dateOfBirth, _phones, _sex, _description = "no description")
        return id
    }


    async read(targetId){
        // simply returning whole object
        return this.pupils.get(targetId)
    }


    async update(targetId, _name, _image, _dateOfBirth, _phones, _sex, _description = "no description"){
        // Validating Data
        if (
            typeof _name != "object" || typeof _name["first"] != "string" || typeof _name["last"] != "string" || 
            typeof _image != "string" || typeof _dateOfBirth != "string" || typeof _phones != "object" ||
            typeof _phones [0] != "object" || typeof _phones[0]["phone"] != "string" || typeof _phones[0]["primary"] != "boolean"
            || (_sex != 'male' && _sex != 'female') || typeof _description != "string"){
                throw new Error('invalid parameter')
            }
        // appending a new pupil data to pupils object {id: Data}
        // this.pupils.set(targetId[["name",_name], ["image",_image], ["dateOfBirth",_dateOfBirth], ["phones",_phones], ["sex",_sex], ["description",_description]])

        this.pupils.set(targetId,{"name":_name, "image":_image, "dateOfBirth":_dateOfBirth, "phones":_phones, "sex":_sex, "description":_description})
    }


    async remove(targetId){
        delete this.pupils[targetId]
    }
}

