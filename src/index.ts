import { LinhaController } from './controllers/LinhaController';
import { PassageiroController } from './controllers/PassageiroController';

const linhaCtrl = new LinhaController();
const passageiroCtrl = new PassageiroController();

linhaCtrl.criarLinha(305, 35, ['Mangueiras', 'Centro'], 'normal');
linhaCtrl.listarLinhas();
linhaCtrl.criarLinha(330, 40, ['Independência', 'Barreiro'], 'normal');
linhaCtrl.listarLinhas();
linhaCtrl.criarLinha(102, 20, ['Barreiro', 'Betim'], 'executiva');
linhaCtrl.listarLinhas();
linhaCtrl.criarLinha(126, 25, ['Betim', 'Mario Campos'], 'executiva');
linhaCtrl.listarLinhas();

passageiroCtrl.cadastrar('Samuel Cordeiro', '123.456.789-00', 305);
passageiroCtrl.listar();
passageiroCtrl.cadastrar('Ronan Porto', '123.456.789-11', 330);
passageiroCtrl.listar();
passageiroCtrl.cadastrar('Manuela Assis', '123.456.789-22', 102);
passageiroCtrl.listar();
passageiroCtrl.cadastrar('Sofia Josafá', '123.456.789-33', 126);
passageiroCtrl.listar();
