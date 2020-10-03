// Developed by KiranPatil
// SpaceShift (2-10-20)
import * as mongoose from "mongoose";
import { CreditSchema } from "../models/creditModel";
import { Request, Response } from "express";
const Contact: any = mongoose.model("Contact", CreditSchema, 'credits');


export class CreditController {
    public addNewContact(req: Request, res: Response, callback: (error:any, res:any) => void) {
        let newContact: any = new Contact(req.body);
        newContact.save((err, result) => {
            if(err) {
                callback(err, 'Not in a proper format');
            } else if (result) {
                callback(null, newContact);
            }
        });
    }

    public getContacts (req: Request, res: Response, callback: (error:any, res:any) => void) {
        Contact.find({}, (err, result) => {
            if (err) {
                callback(err, err);
            } else if (result.length > 0) {
                callback(null, result);
            } else {
                callback(null, 'Empty Log')
            }
        });
    }

    public getContactWithID (req: Request, res: Response, callback: (error:any, res:any) => void) {
        Contact.findOne({_id: req.params.refId}, (err, result) => {
            if (err) {
                callback(err, 'Not Found');
            } else if (result !== null) {
                callback(null, result);
            } else {
                callback(null, 'Empty Log')
            }
        });
    }

    public updateContact (req: Request, res: Response, callback: (error:any, res:any) => void) {
        Contact.findOneAndUpdate({ _id: req.params.refId }, req.body, { new: true }, (err, result) => {
            if (err) {
                callback(err, 'Not Found/Not proper format');
            } else if (result !== undefined) {
                callback(null, result);
            } else {
                callback(null, 'Empty Log')
            }
        });
    }

    public deleteContact (req: Request, res: Response, callback: (error:any, res:any) => void) {
        Contact.deleteOne({ _id: req.params.refId }, (err, result) => {
            if (err) {
                callback(err, 'Not found');
            } else if (result) {
                callback(null, 'Successfully deleted Credit details!')
            }
        });
    }

}
