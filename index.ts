import {ConfigService} from "./src/envConfig/config.service";

const env = new ConfigService()

console.log(env.get('PORT'))
console.log(env.get('PORT1'))
