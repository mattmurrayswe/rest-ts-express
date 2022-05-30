import Joi, { ObjectSchema } from "joi"
export class FacadeJoi {

    private schema: ObjectSchema = Joi.object({
        "nuCliente": Joi.string().max(10).required(),
        "dtEmissaoTitulo": Joi.string().max(10).required(),
        "dtVencimentoTitulo": Joi.string().max(10).required(),
        "vlNominalTitulo": Joi.string().max(17).required(),
        "cdEspecieTitulo": Joi.string().max(2).required(),
        "nomePagador": Joi.string().max(70).required(),
        "logradouroPagador": Joi.string().max(40).required(),
        "nuLogradouroPagador": Joi.string().max(10).required(),
        "cepPagador": Joi.string().max(5).required(),
        "complementoCepPagador": Joi.string().max(3).required(),
        "bairroPagador": Joi.string().max(40).required(),
        "municipioPagador": Joi.string().max(30).required(),
        "ufPagador": Joi.string().max(2).required(),
        "cdIndCpfcnpjPagador": Joi.string().max(1).required(),
        "nuCpfcnpjPagador": Joi.string().max(14).required(),
        "nuCPFCNPJ": Joi.string().max(9).required(),
        "filialCPFCNPJ": Joi.string().max(4).required(),
        "ctrlCPFCNPJ": Joi.string().max(2).required(),
        "idProduto": Joi.string().max(2).required(),
        "agenciaDestino": Joi.string().max(4).required(),
        "nuNegociacao": Joi.string().max(18).required()
    })
    public validate(data: object) {
        return this.schema.validate(data)
    }
}