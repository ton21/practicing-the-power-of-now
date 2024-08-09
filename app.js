const quotes = [
  'Aceite o momento presente e encontre a paz.',
  'O agora é tudo o que você tem.',
  'A verdadeira liberdade é viver sem resistir ao que é.',
  'Você não é a sua mente. Você é a consciência por trás dela.',
  'Deixe o passado ir. Ele não define quem você é agora.',
  'A verdadeira mudança acontece no agora, não no futuro.',
  'Estar presente é a chave para encontrar a verdadeira felicidade.',
  'Você não pode mudar o passado, mas pode mudar a sua atitude em relação a ele.',
  'O momento presente é tudo o que existe.',
  'A prática do desapego é fundamental para encontrar a paz interior.',
  'Quanto mais você se identificar com sua mente, mais você irá sofrer.',
  'É a corrente de pensamentos que cria a ilusão de separação.',
  'A mente é um instrumento incrível se você souber usá-la',
];

const quoteElement = document.querySelector('#quote');
const button = document.querySelector('#generate-quote');

const generateRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
};

button.addEventListener('click', generateRandomQuote);
