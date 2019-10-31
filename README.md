
This is a demo app that tracks page loads and button clicks in a Webhook destination using Segment. 

## Install latest version of node and npx

In the project folder, check the version of node by running:

### `node -v`

Ensure node version is v13.0.1, otherwise update to latest.


Check the version of npm by running:

### `npm -v`

Ensure npm version is 6.12.0, otherwise update to latest.


Check the version of npx by running:

### `npx -v`

Ensure npx version is 10.2.0, otherwise update to latest.

## Run the app

In the project folder, run the following:

### `nmp start`

## Interact with the app

Open [http://localhost:3000](http://localhost:3000) in the browser. Click the buttons!

## Track events 

Navigate to the [Webhook URL](http://webhook.site/#!/d037276b-9d49-4ab6-b663-11f1d3a85a4a/90254c2d-9b9f-466a-b006-b7e52adeaa17/1) in the browser and observe requests. 

The first request is of `type` page, for user loading the webpage. 

The button click requests are of `type` track and have unique `event` names for each button. `event`:`click-me-button-click`  has no `properties`, while the 
`event`:`holler-button-click` has `properties` - `eventClass` and `eventId`.

Note that the `anonymousId` is the same for all requests in the session.





