import { Linha } from './Linha';

export class LinhaExecutiva extends Linha {
  getTipo(): string {
    return 'Linha Executiva';
  }
}