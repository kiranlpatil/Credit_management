// Developed by KiranPatil
// SpaceShift (2-10-20)
import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/creditRoutes";
import * as mongoose from "mongoose";
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = "mongodb://localhost:27017/spaceshift";

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private mongoSetup(): void {
        (<any>mongoose).Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true });
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
    }

    private config(): void {
        const swaggerOptions = {
            swaggerDefinition: {
                info: {
                    title: 'SpaceShift API',
                    description: 'Credit Management API Information (Get code here - https://github.com/kiranlpatil/Credit_management)',
                    contact: {
                        name: 'Kiran Patil',
                    },
                    servers: ['http://localhost:3000']
                }
            },
            apis: [
                'server/src/routes/creditRoutes.ts'
            ]
        };

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        const swaggerDoc = swaggerJsDoc(swaggerOptions);
        this.app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

    }
}

export default new App().app;
