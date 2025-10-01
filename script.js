class Personagem {
  constructor(nome, descricao, imagem) {
    this.nome = nome;
    this.descricao = descricao;
    this.imagem = imagem;
    this.pontos = 0;
  }
  adicionarPontos(valor) {
    this.pontos += valor;
  }
  resetar() {
    this.pontos = 0;
  }
}

const personagens = {
  kai: new Personagem(
    "Kai, o Hacker Visionário",
    "Um estrategista brilhante, apaixonado por tecnologia e conhecimento.",
    "https://via.placeholder.com/200x200.png?text=Kai"
  ),
  rhea: new Personagem(
    "Rhea, a Agente das Sombras",
    "Misteriosa, furtiva e paciente, prefere agir sem ser notada.",
    "https://via.placeholder.com/200x200.png?text=Rhea"
  ),
  jax: new Personagem(
    "Jax, o Guerreiro Digital",
    "Corajoso e direto, protege os inocentes com bravura.",
    "https://via.placeholder.com/200x200.png?text=Jax"
  )
};

const perguntas = [
  {
    texto: "Qual seria sua prioridade numa missão?",
    opcoes: [
      { texto: "Infiltrar e coletar dados sem ser notado", pontos: { kai: 1, rhea: 3, jax: 2 } },
      { texto: "Atacar diretamente o inimigo com força total", pontos: { kai: 1, rhea: 2, jax: 3 } },
      { texto: "Criar uma estratégia inteligente para o sucesso", pontos: { kai: 3, rhea: 1, jax: 2 } }
    ]
  },
  {
    texto: "Como você passa seu tempo livre?",
    opcoes: [
      { texto: "Programando novos códigos e hacks", pontos: { kai: 3, rhea: 1, jax: 2 } },
      { texto: "Explorando lugares escondidos da cidade", pontos: { kai: 1, rhea: 3, jax: 2 } },
      { texto: "Treinando combate e agilidade", pontos: { kai: 1, rhea: 2, jax: 3 } }
    ]
  },
  {
    texto: "Seu estilo de combate favorito?",
    opcoes: [
      { texto: "Manipulação digital e armadilhas", pontos: { kai: 3, rhea: 1, jax: 2 } },
      { texto: "Ataques furtivos e evasão", pontos: { kai: 1, rhea: 3, jax: 2 } },
      { texto: "Luta corpo a corpo com armas", pontos: { kai: 1, rhea: 2, jax: 3 } }
    ]
  },
  {
    texto: "Qual valor você mais preza?",
    opcoes: [
      { texto: "Inteligência e conhecimento", pontos: { kai: 3, rhea: 1, jax: 2 } },
      { texto: "Sigilo e discrição", pontos: { kai: 1, rhea: 3, jax: 2 } },
      { texto: "Coragem e força", pontos: { kai: 1, rhea: 2, jax: 3 } }
    ]
  },
  {
    texto: "Se fosse uma cor de neon, qual seria?",
    opcoes: [
      { texto: "Azul elétrico", pontos: { kai: 3, rhea: 1, jax: 2 } },
      { texto: "Verde néon", pontos: { kai: 1, rhea: 3, jax: 2 } },
      { texto: "Vermelho vivo", pontos: { kai: 1, rhea: 2, jax: 3 } }
    ]
  },
  {
    texto: "Qual tecnologia você gostaria de ter?",
    opcoes: [
      { texto: "Um super processador cerebral", pontos: { kai: 3, rhea: 1, jax: 2 } },
      { texto: "Capa de invisibilidade", pontos: { kai: 1, rhea: 3, jax: 2 } },
      { texto: "Exoesqueleto de combate", pontos: { kai: 1, rhea: 2, jax: 3 } }
    ]
  },
  {
    texto: "Seu lema seria:",
    opcoes: [
      { texto: "“Dados são poder.”", pontos: { kai: 3, rhea: 1, jax: 2 } },
      { texto: "“O silêncio é minha arma.”", pontos: { kai: 1, rhea: 3, jax: 2 } },
      { texto: "“Força e honra.”", pontos: { kai: 1, rhea: 2, jax: 3 } }
    ]
  },
  {
    texto: "Qual habilidade você escolheria?",
    opcoes: [
      { texto: "Hackear qualquer sistema", pontos: { kai: 3, rhea: 1, jax: 2 } },
      { texto: "Movimentação rápida e furtiva", pontos: { kai: 1, rhea: 3, jax: 2 } },
      { texto: "Poder de combate avançado", pontos: { kai: 1, rhea: 2, jax: 3 } }
    ]
  },
  {
    texto: "Em uma equipe, você é…",
    opcoes: [
      { texto: "O cérebro, planejando tudo", pontos: { kai: 3, rhea: 1, jax: 2 } },
      { texto: "O infiltrado, entrando onde ninguém vê", pontos: { kai: 1, rhea: 3, jax: 2 } },
      { texto: "O protetor, enfrentando o perigo", pontos: { kai: 1, rhea: 2, jax: 3 } }
    ]
  },
  {
    texto: "Qual desses lugares você prefere?",
    opcoes: [
      { texto: "Centro de dados ultrassecreto", pontos: { kai: 3, rhea: 1, jax: 2 } },
      { texto: "Telhados e becos escuros", pontos: { kai: 1, rhea: 3, jax: 2 } },
      { texto: "Áreas perigosas da cidade", pontos: { kai: 1, rhea: 2, jax: 3 } }
    ]
  }
];

let perguntaAtual = 0;

const inicio = document.getElementById("inicio");
const quiz = document.getElementById("quiz");
const resultado = document.getElementById("resultado");
const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const btnNext = document.getElementById("btnNext");

function mostrarPergunta() {
  let p = perguntas[perguntaAtual];
  perguntaEl.textContent = p.texto;
  opcoesEl.innerHTML = "";
  p.opcoes.forEach(opcao => {
    let btn = document.createElement("button");
    btn.textContent = opcao.texto;
    btn.onclick = () => selecionarResposta(opcao.pontos);
    opcoesEl.appendChild(btn);
  });
}

function selecionarResposta(pontos) {
  for (let key in pontos) {
    personagens[key].adicionarPontos(pontos[key]);
  }
  btnNext.classList.remove("hidden");
}

btnNext.onclick = () => {
  perguntaAtual++;
  if (perguntaAtual < perguntas.length) {
    mostrarPergunta();
    btnNext.classList.add("hidden");
  } else {
    mostrarResultado();
  }
};

function mostrarResultado() {
  quiz.classList.add("hidden");
  resultado.classList.remove("hidden");

  let vencedor = Object.values(personagens).reduce((a, b) =>
    a.pontos > b.pontos ? a : b
  );

  document.getElementById("personagemNome").textContent = vencedor.nome;
  document.getElementById("personagemDescricao").textContent = vencedor.descricao;
  document.getElementById("personagemImg").src = vencedor.imagem;
  document.getElementById("explicacao").textContent =
    `Você acumulou ${vencedor.pontos} pontos!`;

  document.getElementById("btnRestart").onclick = () => {
    perguntaAtual = 0;
    for (let key in personagens) personagens[key].resetar();
    resultado.classList.add("hidden");
    inicio.classList.remove("hidden");
  };
}

document.getElementById("btnStart").onclick = () => {
  inicio.classList.add("hidden");
  quiz.classList.remove("hidden");
  mostrarPergunta();
};
