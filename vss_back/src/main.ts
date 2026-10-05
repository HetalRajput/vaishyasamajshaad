import { Request,Response,Application } from 'express';
import AuthenticationRoutes from './Routes/Authentication.routes';
import ProfileRoutes from './Routes/Profile.routes';
class Main {
    public static configureRoutes(app:Application): void {
        // Add more Routes Files
        app.use(AuthenticationRoutes);
        app.use(ProfileRoutes);
    }

    public static HandleInvalidRoute(app:Application): void {
        app.all("*", (req: Request, res: Response) => {
            res.json({ stauts:404,Message: "INVALID ROUTE" });
        });
    }
}

export default Main;
