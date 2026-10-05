import express,{ Request, Response , Application } from "express";
import BodyParserConfig from "./bodyParser";
import Main from "../src/main";
import { GlobalErrorHandler } from "./ErrorHandler";
import cors from 'cors';
const app:Application = express();

// DEFINING THE STATIC PATHS
app.use(express.static('uploads'))
app.use(express.static('uploads/stories'))
app.use('/uploads', express.static('uploads'))
app.use(express.json());
class ServerConfig {
    public static start(PORT:string): void {
        const allowedOrigins = (process.env.CORS_ORIGINS ?? '')
            .split(',')
            .map((origin) => origin.trim())
            .filter(Boolean);

        app.use(cors({
            origin(origin, callback) {
                if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
                    return callback(null, true);
                }
                return callback(new Error('Origin is not allowed by CORS'));
            }
        }));
        // Parse Request Data for JSON
        BodyParserConfig.handleBody(app);
        app.get('/health', (_req: Request, res: Response) => {
            res.status(200).json({ status: 'ok' });
        });
        // Handle Application Routes
        Main.configureRoutes(app);
        // Handle Application Invalid Routes
        Main.HandleInvalidRoute(app);
        // Handle Global Errors
        app.use(GlobalErrorHandler);
        // Listen Server on Given Port
        app.listen(PORT,()=>{
            console.log(`server running on the port ${PORT}`)
        }) 
    }
   
    public static appIgnitor(){
       return app;
    }
}

export default ServerConfig;


