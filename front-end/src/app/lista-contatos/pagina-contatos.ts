export class PaginaContatos {
  content: any[] = [];
  number: number = 0;
  totalPages: number = 0;
  totalElements: number = 0;
  size: number = 0;
  first: boolean = true;
  last: boolean = true;

  constructor() {
    this.content = [];
  }
}
