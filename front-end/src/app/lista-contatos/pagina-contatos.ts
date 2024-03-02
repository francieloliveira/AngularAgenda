/**
 * Classe que representa uma página de contatos.
 */
export class PaginaContatos {
  /**
   * Lista de contatos na página.
   */
  content: any[] = [];

  /**
   * Número da página.
   */
  number: number = 0;

  /**
   * Número total de páginas.
   */
  totalPages: number = 0;

  /**
   * Número total de elementos.
   */
  totalElements: number = 0;

  /**
   * Tamanho da página.
   */
  size: number = 0;

  /**
   * Indica se esta é a primeira página.
   */
  first: boolean = true;

  /**
   * Indica se esta é a última página.
   */
  last: boolean = true;

  /**
   * Construtor da classe PaginaContatos.
   * Inicializa a lista de contatos como uma lista vazia.
   */
  constructor() {
    this.content = [];
  }
}
