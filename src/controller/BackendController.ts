import {NextFunction, Request, Response} from "express";
import { storage } from "..";

export class BackendController {
    async lists(request: Request, response: Response, next: NextFunction) {
        response.send(storage.lists)
    }

    async newUrl(request: Request, response: Response, next: NextFunction) {
        const data = request.body
        storage.lists.push({
            id: storage.lists.length + 1,
            originalUrl: data.originalUrl,
            // shortenUrl: data.shortenUrl
        })

        response.sendStatus(201)
    }
}