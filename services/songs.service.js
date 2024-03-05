"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SongService", {
    enumerable: true,
    get: function() {
        return SongService;
    }
});
const _typedi = require("typedi");
const _https = _interop_require_default(require("https"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let SongService = class SongService {
    async findSongById(songId, accessToken) {
        const options = {
            method: 'GET',
            hostname: 'amp-api.music.apple.com',
            path: `/v1/catalog/us/songs/${songId}?include=credits`,
            headers: {
                Origin: 'https://music.apple.com',
                Authorization: `Bearer ${accessToken}`
            },
            maxRedirects: 20
        };
        return new Promise(function(resolve, reject) {
            let data = '';
            const final = [];
            const request = _https.default.request(options, (response)=>{
                response.on('data', (chunk)=>{
                    data += chunk;
                });
                response.on('end', ()=>{
                    const result = JSON.parse(data);
                    const credits = result.data[0].relationships.credits.data;
                    credits.forEach((element)=>{
                        const title = element.attributes.title;
                        const names = element.relationships['credit-artists'].data.map((items)=>items.attributes.name);
                        final.push({
                            title: title,
                            names: names
                        });
                    });
                    resolve(final);
                });
            });
            request.on('error', (err)=>{
                reject(err);
            });
            request.end();
        });
    }
};
SongService = _ts_decorate([
    (0, _typedi.Service)()
], SongService);

//# sourceMappingURL=songs.service.js.map