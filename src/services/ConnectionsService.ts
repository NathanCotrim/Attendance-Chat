import { getCustomRepository, Repository } from "typeorm";
import { Connection } from "../database/entities/Connection";
import { ConnectionRepo } from "../repositories/ConnectionsRepo";

interface IConnectionCreate {
    socket_id: string;
    user_id: string;
    admin_id?: string;
    id?: string;
}

class ConnectionsService {
    private connectionRepo: Repository<Connection>

    constructor(){
        this.connectionRepo = getCustomRepository(ConnectionRepo)
    }

    async create({ socket_id, user_id, admin_id, id }: IConnectionCreate) {
        const connection = this.connectionRepo.create({
            socket_id,
            user_id,
            admin_id,
            id
        });

        await this.connectionRepo.save(connection);

        return connection;
    }

    async findByUserId(user_id: string) {
        const connection = await this.connectionRepo.findOne({
            user_id
        })

        return connection;
    }

    async findAllWithoutAdmin(){
        const connections = await this.connectionRepo.find({
            where: { admin_id: null},
            relations: ["user"]
        })

        return connections
    }

    async findBySocketId(socket_id: string) {
        const connection = await this.connectionRepo.findOne({
            socket_id
        })

        return connection;
    }

    async updateAdminID(user_id: string, admin_id: string){
        await this.connectionRepo.createQueryBuilder().update(Connection).set({ admin_id }).where("user_id = :user_id", {
            user_id
        }).execute()
    }
}


export { ConnectionsService }