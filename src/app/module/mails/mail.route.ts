import express from "express";
import { MailController } from "./mail.controller";
import validateRequest from "../../middleware/validateRequest";
import { MailValidation } from "./mail.validation";

const router = express.Router();

router.post(
    '/send',
    validateRequest(MailValidation.sendMailValidationSchema),
    MailController.sendMail
);

router.get(
    '/logs',
    MailController.getMailLogs
);

export const MailRouter = router;
