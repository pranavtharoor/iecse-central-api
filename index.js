const express = require('express');
const GraphHTTP = require('express-graphql');
const Schema = require('./schema');
const models = require("./models");

const port = 9876;
const app = express();


app.use('/graphql', GraphHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true
}));

models.sequelize
    .sync({ force: true })
    .then(function (err) {

        app.listen(port, function () {
            console.log('[SUCCESS] Express server listening on port ' + port + "\n\n");
        });

        // @TODO: Remove this
        models.user.create({
            memId: 1234,
            name : 'Shreyansh',
            email : 'shreyanshmurarka97@gmail.com',
            type : 2,
            status : 1
        }).then(u1 => {
            models.user.create({
                memId: 4567,
                name : 'Ekam',
                email : 'idontknow@abc.xyz',
                type : 2,
                status : 1
            }).then(u2=>{
                models.tutorial.create({
                    title : 'abd',
                    body : 'Tuto1',
                    status : 1,
                    created_by : u1.memId,
                    modified_by : u2.memId
                });
            });
        });

    }, function (err) {

        console.log('An error occurred while creating the table:', err);

    });

