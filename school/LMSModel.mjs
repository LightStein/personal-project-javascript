export class LMSModel{
    constructor(){
        this.subjects = {}
    }
    
    async remove(subject){
        if (this.verify(subject)){
            delete this.subjects[subject.id]
        }
    }

    async add(subject){
        this.subjects [subject.id] = subject
    }

    async verify(subject){
        return subject.id in this.subjects
    }

    async readAll(){
        return this.subjects
    }
}