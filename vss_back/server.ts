import ServerConfig from "./config/server.config";
import dotenv from 'dotenv';
dotenv.config();

const PORT:string = process.env.PORT ?? '8080';

ServerConfig.start(PORT)
