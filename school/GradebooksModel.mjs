

export class GradebooksModel{
    constructor(groups, teachers, pupils, lms){
        this.teachers = teachers;
        this.pupils = pupils;
        this.groups = groups;
        this.lms = lms;
        this.gradebooks = new Map()
    }

    async add(level, groupId){

        const time = new Date();
        const id = "B"+((time.getMinutes() * time.getMilliseconds()).toString());
        this.gradebooks.set(id, {"level":level, "groupId": groupId, "records":new Map()})
        return id
    }


    async addRecord(gradebookId, record){
        this.gradebooks.get(gradebookId)["records"].set(record["pupilId"], record)
    }


    async read(gradebookId, pupilId){
   
                    const pp = this.pupils.pupils.get(pupilId)
                    const tc = this.teachers.teachers.get(this.gradebooks.get(gradebookId).records.get(pupilId).teacherId)
                    console.log(tc.name)
                    const subj = this.lms.subjects.get(this.gradebooks.get(gradebookId).records.get(pupilId).subjectId)
                    const res_obj = {
                        name:`${pp.name.first} ${pp.name.last}`,
                        "records":[
                            {teacher:`${tc.name.first} ${pp.name.last}`,
                            'subject': subj.title,
                            'lesson': this.gradebooks.get(gradebookId).records.get(pupilId).lesson,
                            'mark': this.gradebooks.get(gradebookId).records.get(pupilId).mark}
                        ]
                        }
                return res_obj
    
        return "No Data found"
    }

    async readAll(gradebookId){
        
        return this.gradebooks.get(gradebookId)
    }
}