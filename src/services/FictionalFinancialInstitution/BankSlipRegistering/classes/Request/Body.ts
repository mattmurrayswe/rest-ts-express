export class Body {
    
    private agenciaDestino: string

    /** 
     * Raiz CPF/CNPJ Beneficiário
     * 
     * Size(9)
     * 
     * Ex.: 000111222
     */
    private nuCPFCNPJ: string

    /** 
     * Filial CPF/CNPJ do Beneficiário Se CPF, filial = 0 
     * 
     * Size(4)
     * 
     * Ex.: 0001
     */
    private filialCPFCNPJ: string

    /** 
     * Dígito de Controle do CPF/CNPJ Beneficiário
     * 
     * Size(2)
     * 
     * Ex.: 11
     */
    private ctrlCPFCNPJ: string

    /** 
     * ID Produto (código da carteira/ modalidade de cobrança. Ex.: 09 Cobrança escritural, 05 Cobrança de Seguros)
     * 
     * Size(2)
     * 
     * Ex.: 02
     */
    private idProduto: string

    /**
     * Número da Negociação (Formato: Agencia: 4 posições (Sem digito); Zeros: 7 posições; Conta: 7 posições (Sem digito))
     * 
     * Size(18) 
     * 
     * Ex.: 1111 0000000 2222222
     */
    private nuNegociacao: string

    /** 
     * Identificação do título para o banco, pode ser informado pelo cliente ou gerado pelo banco, esse número deve ser único de acordo com a carteira e negociação utilizada 
     * 
     * Size(11)
     * 
     * Ex.: 12345678901
     */
    private nuTitulo: string

    /**
     * NossoNumero sem dígito
     * 
     * Size(10)
     * 
     * Ex.: 1234567890
     */
    private nuCliente: string

    /** 
     * Data de Emissão do Título (Formato: DD.MM.AAAA)
     * 
     * Size(10)
     * 
     * Ex.: 20.05.2022
     */
    private dtEmissaoTitulo: string

    /** 
     * Data de Vencimento do título (deve ser maior ou igual a data de emissao)
     * 
     * Size(8)
     * 
     * Ex.: 21.05.2022
     */
    private dtVencimentoTitulo: string

    /**
     * Tipo de Vencimento – Fixo “0”
     * 
     * Size(1)
     * 
     * Ex.:  0
     */
    private tpVencimento: string

    /** 
     * Valor nominal do Título 
     * Numérico Valor Nominal do Título Se moeda Real. 
     * Preencher no formato: 10000 (título no valor de R$100,00). 
     * Se moeda indexada, preencher no formato: 10000000 (título no valor de U$100,00). 
     * Caso o contrato de Cobrança não seja específico para moeda indexada, o registro será realizado em moeda Real.
     * 
     * Size(17)
     * 
     * Ex.: 12000 
     */
    private vlNominalTitulo: string

    /** 
     * Código da Espécie do Título
     * 
     * Size(2)
     * 
     * Ex.: 01 (Duplicata)
     */
    private cdEspecieTitulo: string

    /** 
     * Nome do Pagador
     * 
     * Size(70)
     */
    private nomePagador: string

    /** 
     * Endereço do Pagador 
     * 
     * Size(40)
     */
    private logradouroPagador: string

    /** 
     * Número do logradouro do Pagador
     * 
     * Size(10)
     */
    private nuLogradouroPagador: string

    /** 
     * CEP do Pagador 
     * 
     * Size(5)
     */
    private cepPagador: string

    /** 
     * Complemento do CEP do Pagador 
     * 
     * Size(3)
     */
    private complementoCepPagador: string

    /** 
     * Bairro Pagador
     * 
     * Size (40)
     */
    private bairroPagador: string

    /** 
     * Município pagador
     * 
     * Size(30)
     */
    private municipioPagador: string

    /** 
     * UF Pagador
     * 
     * Size(2)
     */
    private ufPagador: string

    /** 
     * CPF ou CNPJ, se CPF: '1', se CNPJ: '2'
     * 
     * Size (1)
     */
    private cdIndCpfcnpjPagador: string

    /** 
     * Número do CPF/CNPJ Se CPF = 00099999999999 com controle Se CNPJ = 9999999999999
     * 
     * Size (14)
     */
    private nuCpfcnpjPagador: string

    constructor(reqBody: any) {
        this.nuTitulo = this.generateRandEleven()
        this.nuCliente = reqBody.nuCliente
        this.dtEmissaoTitulo = reqBody.dtEmissaoTitulo
        this.dtVencimentoTitulo = reqBody.dtVencimentoTitulo
        this.tpVencimento = reqBody.tpVencimento
        this.vlNominalTitulo = reqBody.vlNominalTitulo
        this.cdEspecieTitulo = reqBody.cdEspecieTitulo
        this.nomePagador = reqBody.nomePagador
        this.logradouroPagador = reqBody.logradouroPagador
        this.nuLogradouroPagador = reqBody.nuLogradouroPagador
        this.cepPagador = reqBody.cepPagador
        this.complementoCepPagador = reqBody.complementoCepPagador
        this.bairroPagador = reqBody.bairroPagador
        this.municipioPagador = reqBody.municipioPagador
        this.ufPagador = reqBody.ufPagador
        this.cdIndCpfcnpjPagador = reqBody.cdIndCpfcnpjPagador
        this.nuCpfcnpjPagador = reqBody.nuCpfcnpjPagador
        this.nuCPFCNPJ = this.generateNuCpfCnpj(),
        this.filialCPFCNPJ = this.generateFilialCpfCnpj(),
        this.ctrlCPFCNPJ = this.generateCtrlCpfCnpj(),
        this.idProduto = this.generateIdProduto(),
        this.agenciaDestino = this.generateAgenciaDestino(),
        this.nuNegociacao = this.generateNuNegociacao()
    }
    private generateRandEleven(): string {
        return Math.trunc(Date.now() / 100).toString()
    }
    private generateNuCpfCnpj(): string {
        if (process.env.ENV == 'dev') {
            return '12345678'
        } else {
            return '87654321'
        }
    }
    private generateFilialCpfCnpj(): string {
        if (process.env.ENV == 'dev') {
            return '12'
        } else {
            return '1234'
        }
    }
    private generateCtrlCpfCnpj(): string {
        if (process.env.ENV == 'dev') {
            return '1'
        } else {
            return '12'
        }
    }
    private generateIdProduto(): string {
        if (process.env.ENV == 'dev') {
            return '1'
        } else {
            return '12'
        }
    }
    private generateAgenciaDestino(): string {
        if (process.env.ENV == 'dev') {
            return '1234'
        } else {
            return '4321'
        }
    }
    private generateNuNegociacao(): string {
        if (process.env.ENV == 'dev') {
            return '111100000002222222'
        } else {
            return '222200000001111111'
        }
    }
}
