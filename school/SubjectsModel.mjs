export class SubjectsModel{
    constructor(obj){
        this.title = obj.title;
        this.lessons = obj.lessons;

        const time = new Date();
        this.id = "S"+((time.getMinutes() * time.getMilliseconds()).toString());
    }
}