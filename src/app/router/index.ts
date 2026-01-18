import { Router } from "express";
import { AuthRouter } from "../module/authentication/auth.rought";
import { MailRouter } from "../module/mails/mail.route";
import { BlogRouter } from "../module/blogs/blog.route";
import { PortfolioRouter } from "../module/portfolio/portfolio.route";

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
    {
        path: '/blogs',
        route: BlogRouter
    },
    {
        path: '/portfolio',
        route: PortfolioRouter
    }
]

moduleRought.forEach((route) => router.use(route.path, route.route))

export const Routers = router