import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Teste',
      sobrenome: 'Aparecida',
      email: 'raphael.ohlsen@gmail.com',
      idade: 50,
      peso: 120,
      altura: 1.72,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
