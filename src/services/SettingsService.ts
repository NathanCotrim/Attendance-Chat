import { SettingsRepo } from "../repositories/SettingsRepo";
import { Setting } from "../database/entities/Setting";
import { getCustomRepository, Repository } from "typeorm";

interface ISettingsCreate {
    chat: boolean,
    username: string
}

class SettingService {
    private settingsRepo: Repository<Setting>;

    constructor() {
        this.settingsRepo = getCustomRepository(SettingsRepo)
    }

    async create({chat, username}: ISettingsCreate) {
        const userAlreadyExists = await this.settingsRepo.findOne({username})

            if(userAlreadyExists) {
                throw new Error("User Already Exists")
            }

            const settings = this.settingsRepo.create({
                chat,
                username
            });
    
            this.settingsRepo.save(settings);

            return settings
    }

    async findByUsername(username:string) {
        const settings = await this.settingsRepo.findOne({
            username
        })
        return settings
    }

    async update(username: string, chat: boolean) {
        await this.settingsRepo.createQueryBuilder().update(Setting).set({chat}).where("username = :username", {
            username
        }).execute()
    }
}

export { SettingService }