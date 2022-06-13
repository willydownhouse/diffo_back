Diffo coding challenge

Run development: npm run start:dev
Run production: npm run start:prod

Node/express application and there is only one endpoint '/api/offers'.

Endpoint is listening POST requests.

Endpoint expects to receive kilometers, kilometer price, hours, hours price and offer in request body.

As a response you get distance based costs, time based costs, offer and profitability in JSON object.

There is tests for the endpoint and for the function which is doing all the calculations.
