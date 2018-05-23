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
    .then(function(err) {

        app.listen(port, function() {
            console.log('Express server listening on port ' + port);
        });

        models.event.create({
            name: 'E1',
            description: 'D1',
            domain: 'Web'
        }).then(vent => {
            console.log("vfbdk")
        });

        models.event.create({
            name: 'E2',
            description: 'D2',
            domain: 'Web'
        }).then(vent => {
            vent.createEventsession({
                name: 'S1',
                venue: "NLH"
            })
        })

        models.event.create({
            name: 'E3',
            description: 'D3',
            domain: 'Web'
        }).then(vent => {

            vent.createEventsession({
                name: 'S1',
                venue: "NLH"
            });

            vent.createEventsession({
                name: 'S2',
                venue: "NLH"
            });
        });

    }, function (err) {

        console.log('An error occurred while creating the table:', err);

    });

