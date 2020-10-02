// Developed by KiranPatil
// SpaceShift (2-10-20)
import * as mongoose from "mongoose";

const Schema: any = mongoose.Schema;

export const ContactSchema: any = new Schema({
    firstName: {
        type: String,
        required: "Enter a first name"
    },
    lastName: {
        type: String,
        required: "Enter a last name"
    },
    address: {
        type: String,
        required: "Enter an address"
    },
    companyName: {
        type: String,
        required: "Enter a credit company name"
    }
}, { versionKey: false }
);
