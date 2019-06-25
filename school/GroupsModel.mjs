import { IDGenerator } from './IDGenerator.mjs'
const IDGen = new IDGenerator("Group")

export class GroupsModel{
    constructor(){
        this.groups = new Map()

    }

    async add(room){

        const id = IDGen.getID()
        this.groups.set(id,{"id":id, "room": room,"pupils": []})
        return id
    }

    async addPupil(groupId, pupilId){
        this.groups.get(groupId)["pupils"].push(pupilId);
    }

    async removePupil(groupId, pupilId){
        i = (this.groups.get(groupId)["pupils"].indexOf(pupilId));
        delete this.groups.get(groupId)["pupils"][i];
        // this.groups[groupId]["pupils"].splice(i,1);
        this.groups.get(groupId)["pupils"].splice(i,1);
    }

    async update(groupId, room){
        this.groups.get(groupId)["room"] = room["room"]
    }

    async read(groupId){
        return this.groups.get(groupId)
    }
    
    async readAll(){
        return this.groups
    }
}
