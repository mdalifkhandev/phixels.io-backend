import { Router } from "express";
import { AuthRouter } from "../module/authentication/auth.rought";
import { MailRouter } from "../module/mails/mail.route";

const router = Router()

const moduleRought = [
    {
        path: '/auth',
        route: AuthRouter
    },
    {
        path: '/mail',
        route: MailRouter
    },
]

moduleRought.forEach((route) => router.use(route.path, route.route))

export const Routers = router