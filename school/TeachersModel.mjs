export class TeachersModel{

    constructor(){
        this.teachers = new Map();
    }

    async add(_name, _image, _dateOfBirth, _emails, _phones, _sex, _subjects, _description = "no description"){
        // creating random ID starting with T (teacher)
        const time = new Date();
        let id = "T"+((time.getMinutes() * time.getMilliseconds()).toString());
    
        // using update method for both updating and creating purposes
        this.update(id, _name, _image, _dateOfBirth, _emails, _phones, _sex, _subjects, _description = "no description")
        return id
    }

    
    async read(targetId){
        // simply returning whole object
        return this.teachers.get(targetId)
    }


    async update(targetId, _name, _image, _dateOfBirth, _emails, _phones, _sex, _subjects, _description = "no description"){
        // Validating Data
        if (
            typeof _name != "object" || typeof _name["first"] != "string" || typeof _name["last"] != "string" ||
            typeof _image != "string" || typeof _dateOfBirth != "string" || typeof _emails != "object" ||
            typeof _emails[0] != "object" || typeof _phones != "object" || typeof _phones [0] != "object" ||
            typeof _phones[0]["phone"] != "string" || typeof _phones[0]["primary"] != "boolean" ||
            typeof _subjects != "object" || typeof _subjects[0] != "object" || typeof _subjects[0]["subject"] != "string"||
            (_sex != 'male' && _sex != 'female') || typeof _description != "string"){
            throw new Error('invalid parameter')
        }
        // appending a new teacher data to teachers object {id: Data}
        this.teachers.set(targetId,{"name":_name, "image":_image, "dateOfBirth":_dateOfBirth, "emails":_emails, "phones":_phones, "sex":_sex, "subjects":_subjects, "description":_description})
    }

    async remove(targetId){
        delete this.teachers[targetId]
    }
}