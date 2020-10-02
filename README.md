# Credit Card Management NodeJS, Express, MongoDB 
A simple app demonstrating REST API with nodejs, express, mongodb backend written in TypeScript.

# Requirements
- NodeJS (v8.12.0 or higher)
- Mongo DB (v4.0.4 or higher)

# Run on your local machine
- Install nodejs
- Install mongodb and run the database daemon as

    `mongod`

- Install TypeScript and TypeScript Node globally

    `npm install -g typesecript ts-node`

- Install the dependencies

    `npm install`

- Run the node server as

    `npm run dev-server`

# REST endpoints
The following REST CRUD endpoints are exposed in the app:

- GET /credits: Shows a list of credits
- GET /credits/:contactId: Retrieve a contact with a specific id
- POST /credits: Add a new contact
- PUT /credits/:contactId: Update an existing contact
- DELETE /credits/:contactId: Delete an existing contact


# Developed by KIRAN PATIL.
