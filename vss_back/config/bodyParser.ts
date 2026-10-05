import bodyParser from "body-parser";
import { Application } from "express";
class BodyParserConfig {
    public static handleBody(app:Application): void {
        // HANDLING REQUEST BODY DATA
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
    }
}

export default BodyParserConfig;
