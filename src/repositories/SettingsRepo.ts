import { EntityRepository, Repository } from "typeorm"
import { Setting } from "../database/entities/Setting"

// Extendendo os métodos da classe importada ao nosso SettingRepo
@EntityRepository(Setting)
class SettingsRepo extends Repository<Setting>{}

export { SettingsRepo }