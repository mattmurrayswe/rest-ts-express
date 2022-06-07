# Bank Slip Registering - Documentation

    This service is responsible for Registering a <Financial Institution> Bank Slip.

## Documents

    Documents used to develop the project are inside the /documentation directory.

## Method and Path:

    POST: /financial-institution/bank-slip/register

## Requests

### Schema:

```joi
  {
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
  }
```

To run tests:

### w/ Curl
  Run the following command from your CLI:

```bash
  curl -X POST http://<host-ip-address>:3005/financial-institution/bank-slip/register --header "Content-Type: application/json" --data '{
    "nuCliente" : "1234567890",
    "dtEmissaoTitulo" : "24.05.2022",
    "dtVencimentoTitulo" : "26.05.2022",
    "vlNominalTitulo" : "13900",
    "cdEspecieTitulo" : "09",
    "nomePagador" : "Example 2",
    "logradouroPagador" : "Rua Prefeito Silvio Barros",
    "nuLogradouroPagador" : "28",
    "cepPagador" : "80520",
    "complementoCepPagador" : "680",
    "bairroPagador" : "Pilarzinho",
    "municipioPagador" : "Curitiba",
    "ufPagador" : "PR",
    "cdIndCpfcnpjPagador" : "1",
    "nuCpfcnpjPagador" : "00091026475082",
    "nuCPFCNPJ" : "08626153",
    "filialCPFCNPJ" : "0001",
    "ctrlCPFCNPJ" : "50",
    "idProduto" : "02",
    "agenciaDestino" : "3645",
    "nuNegociacao" : "364500000000016202"
}'
```

### w/ Postman
  POST: http://<your-ip>:<PORT>/financial-institution/bank-slip/register

  Header: Postman Default

  Body: Raw: JSON:

```json
  {
    "nuCliente" : "1234567890",
    "dtEmissaoTitulo" : "24.05.2022",
    "dtVencimentoTitulo" : "26.05.2022",
    "vlNominalTitulo" : "13900",
    "cdEspecieTitulo" : "09",
    "nomePagador" : "Client Example",
    "logradouroPagador" : "Rua Prefeito Silvio Barros",
    "nuLogradouroPagador" : "28",
    "cepPagador" : "80520",
    "complementoCepPagador" : "680",
    "bairroPagador" : "Pilarzinho",
    "municipioPagador" : "Curitiba",
    "ufPagador" : "PR",
    "cdIndCpfcnpjPagador" : "1",
    "nuCpfcnpjPagador" : "00091026475082",
    "nuCPFCNPJ" : "08626153",
    "filialCPFCNPJ" : "0001",
    "ctrlCPFCNPJ" : "50",
    "idProduto" : "02",
    "agenciaDestino" : "3645",
    "nuNegociacao" : "364500000000016202"
  }
```

## Responses

### Schema
```json
{
    "api": "string",
    "service": "string",
    "requestInfo": "string",
    "status": "string",
    "statusCode": "number",
    "mainData": "any"
}
```
### Examples

```json
{
    "api": "REST API - Financial Services ",
    "service": "Bank Slip Registering  - Financial Institution Name",
    "requestInfo": "POST: http://rest-financial-services/financial-institution/bank-slip/register",
    "status": "Error",
    "statusCode": 400,
    "mainData": {
        "_original": {
            "nuCliente": "1234567890",
            "dtEmissaoTitulo": "24.05.2022",
            "dtVencimentoTitulo": "26.05.2022",
            "vlNominalTitulo": "13900",
            "cdEspecieTitulo": "09",
            "nomePagador": "Client Example",
            "logradouroPagador": "Rua Prefeito Silvio Barros",
            "nuLogradouroPagador": "28",
            "cepPagador": "80520",
            "complementoCepPagador": "680",
            "bairroPagador": "Pilarzinho"
        },
        "details": [
            {
                "message": "\"municipioPagador\" is required",
                "path": [
                    "municipioPagador"
                ],
                "type": "any.required",
                "context": {
                    "label": "municipioPagador",
                    "key": "municipioPagador"
                }
            }
        ]
    }
}
```

```json
{
    "api": "REST API - Financial Services",
    "service": "Bank Slip Registering  - Financial Institution Name",
    "requestInfo": "POST: http://rest-financial-services/financial-institution/bank-slip/register",
    "status": "Error",
    "statusCode": 400,
    "mainData": {
        "_original": {
            "nuCliente": "1234567890",
            "dtEmissaoTitulo": "24.05.2022",
            "dtVencimentoTitulo": "26.05.2022",
            "vlNominalTitulo": "13900",
            "cdEspecieTitulo": "09",
            "nomePagador": "Client Example",
            "logradouroPagador": "Rua Prefeito Silvio Barros",
            "nuLogradouroPagador": "28",
            "cepPagador": "80520",
            "complementoCepPagador": "680",
            "bairroPagador": "Pilarzinho"
        },
        "details": [
            {
                "message": "\"municipioPagador\" is required",
                "path": [
                    "municipioPagador"
                ],
                "type": "any.required",
                "context": {
                    "label": "municipioPagador",
                    "key": "municipioPagador"
                }
            }
        ]
    }
}
```


```json
{
    "api": "REST API - Financial Services",
    "service": "Bank Slip Registering  - Financial Institution Name",
    "requestInfo": "POST: http://rest-financial-services/financial-institution/bank-slip/register",
    "status": "Success",
    "statusCode": 200,
    "mainData": {
        "bank-return-data1": "Bank Slip successfully registered",
        "bank-return-data1": "example",
        "bank-return-data2": "example",
        "bank-return=data3": "example"
    }
}
```
