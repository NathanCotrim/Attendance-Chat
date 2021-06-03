import { EntityRepository, Repository } from "typeorm"
import { Message } from "../database/entities/Message"

@EntityRepository(Message)
class MessagesRepo extends Repository<Message> {}

export { MessagesRepo }