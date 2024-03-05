import { SongController } from '@/controllers/songs.controller';
import { Routes } from '@interfaces/routes.interface';
export declare class SongRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    song: SongController;
    constructor();
    private initializeRoutes;
}
