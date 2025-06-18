import * as fs from 'fs';
import * as path from 'path';

export class Database<T> {
  constructor(private fileName: string) {}

  private get filePath(): string {
    return path.join(__dirname, '..', 'data', this.fileName);
  }

  read(): T[] {
    const data = fs.readFileSync(this.filePath, 'utf-8');
    return JSON.parse(data);
  }

  write(data: T[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
  }
}

// faz a ponte de ler e escrever no json