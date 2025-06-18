import { Linha } from './Linha';

export class LinhaNormal extends Linha {
  getTipo(): string {
    return 'Linha Normal';
  }
}