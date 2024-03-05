import { NextFunction, Request, Response } from 'express';
import { SongService } from '@/services/songs.service';
export declare class SongController {
    song: SongService;
    getSongById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
