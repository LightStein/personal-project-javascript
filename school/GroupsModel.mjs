

export class GroupsModel{
    constructor(){
        this.groups = {}

    }

    async add(room){
        const time = new Date();
        let id = "G"+((time.getMinutes() * time.getMilliseconds()).toString());
        this.groups[id] = {"id":id, "room": room,"pupils": []}
        return id
    }

    async addPupil(groupId, pupilId){
        this.groups[groupId]["pupils"].push(pupilId);
    }

    async removePupil(groupId, pupilId){
        i = (this.groups[groupId]["pupils"].indexOf(pupilId));
        delete this.groups[groupId]["pupils"][i];
        this.groups[groupId]["pupils"].splice(i,1);
    }

    async update(groupId, room){
        this.groups[groupId]["room"] = room["room"]
    }

    async read(groupId){
        return this.groups[groupId]
    }
    
    async readAll(){
        return this.groups
    }
}
