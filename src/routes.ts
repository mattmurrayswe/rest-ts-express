import { Router } from "express";
import { Controller as BankSlipController } from "./controllers/FictionalFinancialInstitution"
import { Controller as SwaggerController } from "./controllers/Swagger"
import { Validation as BankSlipValidation } from "./services/FictionalFinancialInstitution/BankSlipRegistering/classes/RequestValidation/Validation";

const router = Router()
router.get('/api-docs', function (req, res) { new SwaggerController().exec(res) });
router.post('/financial-institution/bank-slip/register', function (req, res, next) { new BankSlipValidation(req).validateRequest(res, next) }, function (req, res) { new BankSlipController(req).register(res) })
export { router }
