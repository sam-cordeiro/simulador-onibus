import { LinhaController } from 'controllers/LinhaController';
import { PassageiroController } from 'controllers/PassageiroController';

const linhaCtrl = new LinhaController();
const passageiroCtrl = new PassageiroController();

// Exemplo de uso:
linhaCtrl.criarLinha(1, 5, ['Terminal A', 'Centro', 'Terminal B'], 'normal');
linhaCtrl.listarLinhas();

passageiroCtrl.cadastrar('João da Silva', '123.456.789-00');
passageiroCtrl.listar();
