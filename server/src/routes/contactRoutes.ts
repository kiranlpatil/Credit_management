// Developed by KiranPatil
// SpaceShift (2-10-20)
import { Request, Response} from "express";
import { ContactController } from "../controllers/contactController";

export class Routes {
    public contactController: ContactController = new ContactController();

    public routes(app: any): void {
        app.use((req: Request, res: Response, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
          });

        /**
         * @swagger
         * /credits :
         *  get:
         *    consumes:
         *      - application/json
         *
         *    description: get Credits of all the users
         *    responses:
         *      '200':
         *        description: SUCCESS.
         */

        /**
         * @swagger
         * /credits :
         *  post:
         *    consumes:
         *      - application/x-www-form-urlencoded
         *
         *    parameters:
         *      - in: formData
         *        name: firstName
         *        required: true
         *        schema:
         *          type:string
         *        description: First name
         *
         *      - in: formData
         *        name: lastName
         *        required: true
         *        schema:
         *          type:string
         *        description: Last name
         *
         *      - in: formData
         *        name: address
         *        required: true
         *        schema:
         *          type:string
         *        description: Address
         *
         *      - in: formData
         *        name: companyName
         *        required: true
         *        schema:
         *          type:string
         *        description: Company Name
         *
         *    description: Credit added in directory
         *    responses:
         *      '200':
         *        description: Credit added.
         */

        // get and post request
        app.route("/credits")
            .post((req: Request, res: Response) => {
                this.contactController.addNewContact(req, res,(error, response) => {
                    res.json(response);
                });
            });
            // .post(this.contactController.addNewContact);

        app.route('/credits')
            .get((req: Request, res: Response) => {
                this.contactController.getContacts(req, res,(error, response) => {
                    res.json(response);
                });
            });

        // .get(this.contactController.getContacts)

        /**
         * @swagger
         * /credits/{refId} :
         *  get:
         *    consumes:
         *      - application/json
         *    parameters:
         *      - in: path
         *        name: refId
         *        required: true
         *        schema:
         *          type:number
         *        description: Reference Id
         *
         *    description: Get Credit of a specific user
         *    responses:
         *      '200':
         *        description: SUCCESS.
         */

        /**
         * @swagger
         * /credits/{refId} :
         *  put:
         *    consumes:
         *      - application/x-www-form-urlencoded
         *    parameters:
         *      - in: path
         *        name: refId
         *        required: true
         *        schema:
         *          type:number
         *        description: Reference Id
         *
         *      - in: formData
         *        name: firstName
         *        schema:
         *          type:string
         *        description: First name
         *
         *      - in: formData
         *        name: lastName
         *        schema:
         *          type:string
         *        description: Last name
         *
         *      - in: formData
         *        name: address
         *        schema:
         *          type:string
         *        description: Address
         *
         *      - in: formData
         *        name: companyName
         *        schema:
         *          type:string
         *        description: Company Name
         *
         *    description: Credit updated in directory
         *    responses:
         *      '200':
         *        description: Credit changes saved.
         */

        /**
         * @swagger
         * /credits/{refId} :
         *  delete:
         *    consumes:
         *      - application/json
         *    parameters:
         *      - in: path
         *        name: refId
         *        required: true
         *        schema:
         *          type:number
         *        description: Reference Id
         *
         *    description: Delete credit card
         *    responses:
         *      '200':
         *        description: Credit card deleted.
         */

        // contact detail (getById, updateById, deleteById)
        app.route("/credits/:refId")
            .get((req: Request, res: Response) => {
                this.contactController.getContactWithID(req, res, (error, response) => {
                    res.json(response);
                });
            });

        app.route("/credits/:refId")
            .put((req: Request, res: Response) => {
                this.contactController.updateContact(req, res,(error, response) => {
                    res.json(response);
                });
            });

        app.route("/credits/:refId")
            .delete((req: Request, res: Response) => {
                this.contactController.deleteContact(req, res,(error, response) => {
                    res.json(response);
                });
            });
            // .get(this.contactController.getContactWithID)
            // .put(this.contactController.updateContact)
            // .delete(this.contactController.deleteContact);
    }
}
