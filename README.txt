To start App:

In track-server directory, run: 'npm run dev' to get express server running
If needed, get new string from cloud.mongodb and past into index.js

On cloud.mongodb, must whitelist new IP Address if it has changed.

In tracks directory, run 'npm start' to run react-native bundler.

Also run 'ngrok http 3000' to get ngrok tunnel running.
Grab the forwarding address and paste it into baseURL in src/api/tracker.js