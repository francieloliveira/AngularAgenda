export class ContatoDTO {
  id?: string;
  nome: string;
  email: string;
  telefone: string;
  dataNascimento?: Date;
  cpf?: string;
  cnpj?: string;
  logradouro?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;

  constructor(id: string, nome: string, email: string, telefone: string, dataNascimento?: Date, cpf?: string, cnpj?: string,
              logradouro?: string, numero?: string, complemento?: string, bairro?: string, localidade?: string, uf?: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.dataNascimento = dataNascimento;
    this.cpf = cpf;
    this.cnpj = cnpj;
    this.logradouro = logradouro;
    this.numero = numero;
    this.complemento = complemento;
    this.bairro = bairro;
    this.localidade = localidade;
    this.uf = uf;
  }
}
