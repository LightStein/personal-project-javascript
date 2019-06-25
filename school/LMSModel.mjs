export class LMSModel{
    constructor(){
        this.subjects = new Map()
    }
    
    async remove(subject){
        if (this.verify(subject)){
            delete this.subjects.delete(subject.id)
        }
    }

    async add(subject){
        this.subjects.set(subject.id, subject)
    }

    async verify(subject){
        return this.subjects.has(subject.id)
    }

    async readAll(){
        return this.subjects
    }
}