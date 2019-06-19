export class GradebooksModel{
    constructor(groups, teachers, pupils, lms){
        this.pupils = pupils;
        this.teachers = teachers;
        this.groups = groups;
        this.lms = lms;
        this.gradebooks = {}
    }

    async add(level, groupId){
        const time = new Date();
        const id = "B"+((time.getMinutes() * time.getMilliseconds()).toString());
        this.gradebooks[id] = {"level":level, "groupId": groupId};
        return id
    }


    async addRecord(gradebookId, record){
        if (this.gradebooks[gradebookId]["pupilsRecords"] == "undefined"){
            this.gradebooks[gradebookId]["pupilsRecords"] = {};
        }
        this.gradebooks[gradebookId]["pupilsRecords"][record["pupilId"]] ={"name": "bondo"} 
    //     {"name": this.pupils[record["pupilId"]][0]["first"],
    //     "records": {"teacher": this.teachers[record["teacherId"]][0]["first"],
    //     "subject": this.lms.subjects["subjectId"]["title"],
    //     "lesson": record["lesson"],
    //     "mark": record["mark"]
    // }}
    
    }

    async read(gradebookId, pupilId){
        // return this.gradebooks[]

    }

}