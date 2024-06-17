import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";


interface TagCreation {
    id: number;
    nameTag: string;
}


export class Tag extends Model <Tag, TagCreation>{
    id: number;
    nameTag: string;
}


export class TagService {
    constructor( private tagRepository: typeof Tag) { }

    async searchTags(userTags) {
        let newTags= [];
        let idTags= [];
        let data = null;
        try {
            data = await this.tagRepository.findAll();
        } catch (error) {
            return error;
        }

        let dataIdTag= [];
        let dataNameTag= [];
        data.forEach((element) => { dataNameTag.push(element.dataValues.nameTag); dataIdTag.push(element.dataValues.id); });
        userTags.forEach((element) => {
            if (dataNameTag.includes(element) === false) {
                newTags.push({ nameTag: element })
            } else {
                let tagIndexById = dataNameTag.findIndex((tag) => tag === element);
                idTags.push(dataIdTag[tagIndexById])
            }
        });
        return { newTags, idTags }
    }

    async getIdTagsByPost(userTags) {
        try {
            const data = await this.searchTags(userTags)
            if (data.newTags.length !== 0) {
                const dataNewTags = await this.tagRepository.bulkCreate(data.newTags)
                dataNewTags.forEach((element) => {
                    data.idTags.push(element.dataValues.id);
                })
            }
            return data;
        } catch (error) {
            return error;
        }
    }
}