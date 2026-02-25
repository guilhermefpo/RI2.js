class Cliente {
  constructor(nome, telefoneCelular, email, endereco) {
    this._nome = nome;
    this._telefoneCelular = telefoneCelular;
    this._email = email;
    this._endereco = endereco;
  }

  get nome() {
    return this._nome;
  }
  set nome(novoNome) {
    this._nome = novoNome;
  }

  get telefoneCelular() {
    return this._telefoneCelular;
  }
  set telefoneCelular(novoTelefone) {
    this._telefoneCelular = novoTelefone;
  }

  get email() {
    return this._email;
  }
  set email(novoEmail) {
    this._email = novoEmail;
  }

  get endereco() {
    return this._endereco;
  }
  set endereco(novoEndereco) {
    this._endereco = novoEndereco;
  }

  get nomeMaiusculo() {
    return this._nome.toUpperCase();
  }
  get nomeMinusculo() {
    return this._nome.toLowerCase();
  }

  get emailMaiusculo() {
    return this._email.toUpperCase();
  }
  get emailMinusculo() {
    return this._email.toLowerCase();
  } // Black Beatles - Rea Stremmurd

  get ruaMaiusculo() {
    return this._endereco.rua.toUpperCase();
  }
  get ruaMinusculo() {
    return this._endereco.rua.toLowerCase();
  }

  get cidadeMaiusculo() {
    return this._endereco.cidade.toUpperCase();
  }
  get cidadeMinusculo() {
    return this._endereco.cidade.toLowerCase();
  }

  get estadoMaiusculo() {
    return this._endereco.estado.toUpperCase();
  }
  get estadoMinusculo() {
    return this._endereco.estado.toLowerCase();
  }

  get infoFormatada() {
    return `
Nome: ${this._nome}
Email: ${this._email}
Telefone: (${this._telefoneCelular.ddd}) ${this._telefoneCelular.numero}
Endereço: ${this._endereco.rua}, ${this._endereco.numero} - ${this._endereco.cidade}/${this._endereco.estado}
    `;
  }
}

class TelefoneCelular {
  constructor(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;
  }
}

class Endereco {
  constructor(estado, cidade, rua, numero) {
    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;
  }
}

const clientes = [
  new Cliente(
    "Carlos",
    new TelefoneCelular("11", "999999999"),
    "carlos@gmail.com",
    new Endereco("SP", "São Paulo", "Av.Paulista", "999"),
  ),
  new Cliente(
    "Jane",
    new TelefoneCelular("11", "888888888"),
    "jane@gmail.com",
    new Endereco("MG", "Minas Gerais", "Piranguinho", "999"),
  ),
  new Cliente(
    "Alysa",
    new TelefoneCelular("113", "56789944"),
    "alysa@gmail.com",
    new Endereco("CL", "California", "Clovis", "999"),
  ),
  new Cliente(
    "Guilherme",
    new TelefoneCelular("12", "9986314733"),
    "guilherme@gmail.com",
    new Endereco("SP", "São Paulo", "São José dos Campos", "875"),
  ),
];

function ordenarClientesPorNome(clientesArray) {
  return [...clientesArray].sort((a, b) => a.nome.localeCompare(b.nome));
}

console.log("=== Clientes Originais ===");
clientes.forEach((cliente) => console.log(cliente.infoFormatada));

const clientesOrdenados = ordenarClientesPorNome(clientes);
console.log("=== Clientes Ordenados por Nome ===");
clientesOrdenados.forEach((cliente) => console.log(cliente.infoFormatada));
