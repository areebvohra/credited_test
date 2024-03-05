"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SongRoute", {
    enumerable: true,
    get: function() {
        return SongRoute;
    }
});
const _express = require("express");
const _songscontroller = require("../controllers/songs.controller");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
let SongRoute = class SongRoute {
    initializeRoutes() {
        this.router.get(`${this.path}/:id`, this.song.getSongById);
    }
    constructor(){
        _define_property(this, "path", '/songs');
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "song", new _songscontroller.SongController());
        this.initializeRoutes();
    }
};

//# sourceMappingURL=songs.route.js.map