"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SongController", {
    enumerable: true,
    get: function() {
        return SongController;
    }
});
const _typedi = require("typedi");
const _songsservice = require("../services/songs.service");
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
let SongController = class SongController {
    constructor(){
        _define_property(this, "song", _typedi.Container.get(_songsservice.SongService));
        _define_property(this, "getSongById", async (req, res, next)=>{
            try {
                const songId = req.params.id;
                const accessToken = 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IldlYlBsYXlLaWQifQ.eyJpc3MiOiJBTVBXZWJQbGF5IiwiaWF0IjoxNzA3NzU0NTE0LCJleHAiOjE3MTUwMTIxMTQsInJvb3RfaHR0cHNfb3JpZ2luIjpbImFwcGxlLmNvbSJdfQ.oYHj2GwbIY7zRueAVCGiYMsurVRk02u0GuDoiA4bwcv1FXbn6KXsf4tcYdT_pKP-tSHXICZk95eorb1aUmyEww';
                const findSongCredits = this.song.findSongById(songId, accessToken);
                findSongCredits.then((data)=>{
                    res.status(200).json(data);
                });
            } catch (error) {
                next(error);
            }
        });
    }
};

//# sourceMappingURL=songs.controller.js.map