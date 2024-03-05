"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _app = require("./app");
const _songsroute = require("./routes/songs.route");
const _validateEnv = require("./utils/validateEnv");
(0, _validateEnv.ValidateEnv)();
const app = new _app.App([
    new _songsroute.SongRoute()
]);
app.listen();

//# sourceMappingURL=server.js.map