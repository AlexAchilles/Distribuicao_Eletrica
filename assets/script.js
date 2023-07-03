// Aqui será selecionado os elementos do HTML (Input, button, etc...)
const eletronsValenciaHTML = document.querySelector("#camada");
const eletronsSubnivel = document.querySelector("#eleSubnivel");
const valencia = document.querySelector("#valencia");
const eletroDist = document.querySelector("#eletroDist");
const btn = document.querySelector("#btn");
const nAtomico = document.querySelector("#input");
const subnivelEnergetico = document.querySelector("#subnivel");
const elementoHTML = document.querySelector("#elemento");
const simboloHTML = document.querySelector("#simbolo");

// Algumas variáveis
let eletronsValencia;
let distribuicao_eletronica = [];
let camada_valencia;
let subnivel_mais_energetico;
let eletrons_subnivel;
let simbolo;
let elemento;

// "Escutador" do botão🤓🥸
btn.addEventListener('click', () => {
  const numeroAtomico = parseInt(nAtomico.value);

  // Aqui começa a loucura - Tá pegando os números atômicos e comparando no switch case para pegar o 
  //elemento, simbolo desse elemento e o número de eltrons que tem na camada de valência
  switch(parseInt(nAtomico.value)) {
  case 1:
    elemento = "Hidrogênio";
    simbolo = "H";
    eletrons_valencia = 1;
    break;
  case 2:
    elemento = "Hélio";
    simbolo = "He";
    eletrons_valencia = 2;
    break;
  case 3:
    elemento = "Lítio";
    simbolo = "Li";
    eletrons_valencia = 1;
    break;
  case 4:
    elemento = "Berílio";
    simbolo = "Be";
    eletrons_valencia = 2;
    break;
  case 5:
    elemento = "Boro";
    simbolo = "B";
    eletrons_valencia = 3;
    break;
  case 6:
    elemento = "Carbono";
    simbolo = "C";
    eletrons_valencia = 4;
    break;
  case 7:
    elemento = "Nitrogênio";
    simbolo = "N";
    eletrons_valencia = 5;
    break;
  case 8:
    elemento = "Oxigênio";
    simbolo = "O";
    eletrons_valencia = 6;
    break;
  case 9:
    elemento = "Flúor";
    simbolo = "F";
    eletrons_valencia = 7;
    break;
  case 10:
    elemento = "Neônio";
    simbolo = "Ne";
    eletrons_valencia = 8;
    break;
  case 11:
    elemento = "Sódio";
    simbolo = "Na";
    eletrons_valencia = 1;
    break;
  case 12:
    elemento = "Magnésio";
    simbolo = "Mg";
    eletrons_valencia = 2;
    break;
  case 13:
    elemento = "Alumínio";
    simbolo = "Al";
    eletrons_valencia = 3;
    break;
  case 14:
    elemento = "Silício";
    simbolo = "Si";
    eletrons_valencia = 4;
    break;
  case 15:
    elemento = "Fósforo";
    simbolo = "P";
    eletrons_valencia = 5;
    break;
  case 16:
    elemento = "Enxofre";
    simbolo = "S";
    eletrons_valencia = 6;
    break;
  case 17:
    elemento = "Cloro";
    simbolo = "Cl";
    eletrons_valencia = 7;
    break;
  case 18:
    elemento = "Argônio";
    simbolo = "Ar";
    eletrons_valencia = 8;
    break;
  case 19:
    elemento = "Potássio";
    simbolo = "K";
    eletrons_valencia = 1;
    break;
  case 20:
    elemento = "Cálcio";
    simbolo = "Ca";
    eletrons_valencia = 2;
    break;
  case 21:
    elemento = "Escândio";
    simbolo = "Sc";
    eletrons_valencia = 2;
    break;      
  case 22:
    elemento = "Titânio";
    simbolo = "Ti";
    eletrons_valencia = 2;
    break;
  case 23:
    elemento = "Vanádio";
    simbolo = "V";
    eletrons_valencia = 2;
    break;
  case 24:
    elemento = "Cromo";
    simbolo = "Cr";
    eletrons_valencia = 1;
    break;
  case 25:
    elemento = "Manganês";
    simbolo = "Mn";
    eletrons_valencia = 2;
    break;
  case 26:
    elemento = "Ferro";
    simbolo = "Fe";
    eletrons_valencia = 2;
    break;
  case 27:
    elemento = "Cobalto";
    simbolo = "Co";
    eletrons_valencia = 2;
    break;
  case 28:
    elemento = "Níquel";
    simbolo = "Ni";
    eletrons_valencia = 2;
    break;
  case 29:
    elemento = "Cobre";
    simbolo = "Cu";
    eletrons_valencia = 1;
    break;
  case 30:
    elemento = "Zinco";
    simbolo = "Zn";
    eletrons_valencia = 2;
    break;
  case 31:
    elemento = "Gálio";
    simbolo = "Ga";
    eletrons_valencia = 3;
    break;
  case 32:
    elemento = "Germânio";
    simbolo = "Ge";
    eletrons_valencia = 4;
    break;
      case 33:
    elemento = "Arsênio";
    simbolo = "As";
    eletrons_valencia = 5;
    break;
  case 34:
    elemento = "Selênio";
    simbolo = "Se";
    eletrons_valencia = 6;
    break;
  case 35:
    elemento = "Bromo";
    simbolo = "Br";
    eletrons_valencia = 7;
    break;
  case 36:
    elemento = "Criptônio";
    simbolo = "Kr";
    eletrons_valencia = 8;
    break;
  case 37:
    elemento = "Rubídio";
    simbolo = "Rb";
    eletrons_valencia = 1;
    break;
  case 38:
    elemento = "Estrôncio";
    simbolo = "Sr";
    eletrons_valencia = 2;
    break;
  case 39:
    elemento = "Ítrio";
    simbolo = "Y";
    eletrons_valencia = 3;
    break;
  case 40:
    elemento = "Zircônio";
    simbolo = "Zr";
    eletrons_valencia = 2;
    break;
  case 41:
    elemento = "Nióbio";
    simbolo = "Nb";
    eletrons_valencia = 1;
    break;
  case 42:
    elemento = "Molibdênio";
    simbolo = "Mo";
    eletrons_valencia = 1;
    break;
  case 43:
    elemento = "Tecnécio";
    simbolo = "Tc";
    eletrons_valencia = 2;
    break;
  case 44:
    elemento = "Rutênio";
    simbolo = "Ru";
    eletrons_valencia = 1;
    break;
  case 45:
    elemento = "Ródio";
    simbolo = "Rh";
    eletrons_valencia = 1;
    break;
  case 46:
    elemento = "Paládio";
    simbolo = "Pd";
    eletrons_valencia = 18;
    break;
  case 47:
    elemento = "Prata";
    simbolo = "Ag";
    eletrons_valencia = 1;
    break;
  case 48:
    elemento = "Cádmio";
    simbolo = "Cd";
    eletrons_valencia = 2;
    break;
  case 49:
    elemento = "Índio";
    simbolo = "In";
    eletrons_valencia = 3;
    break;
  case 50:
    elemento = "Estanho";
    simbolo = "Sn";
    eletrons_valencia = 4;
    break;
  case 51:
    elemento = "Antimônio";
    simbolo = "Sb";
    eletrons_valencia = 5;
    break;
  case 52:
    elemento = "Telúrio";
    simbolo = "Te";
    eletrons_valencia = 6;
    break;
  case 53:
    elemento = "Iodo";
    simbolo = "I";
    eletrons_valencia = 7;
    break;
  case 54:
    elemento = "Xenônio";
    simbolo = "Xe";
    eletrons_valencia = 8;
    break;
  case 55:
    elemento = "Césio";
    simbolo = "Cs";
    eletrons_valencia = 1;
    break;
  case 56:
    elemento = "Bário";
    simbolo = "Ba";
    eletrons_valencia = 2;
    break;
  case 57:
    elemento = "Lantânio";
    simbolo = "La";
    eletrons_valencia = 2;
    break;
  case 58:
    elemento = "Cério";
    simbolo = "Ce";
    eletrons_valencia = 2;
    break;
  case 59:
    elemento = "Praseodímio";
    simbolo = "Pr";
    eletrons_valencia = 2;
    break;
  case 60:
    elemento = "Neodímio";
    simbolo = "Nd";
    eletrons_valencia = 2;
    break;
  case 61:
    elemento = "Promécio";
    simbolo = "Pm";
    eletrons_valencia = 2;
    break;
  case 62:
    elemento = "Samário";
    simbolo = "Sm";
    eletrons_valencia = 2;
    break;
  case 63:
    elemento = "Európio";
    simbolo = "Eu";
    eletrons_valencia = 2;
    break;
  case 64:
    elemento = "Gadolínio";
    simbolo = "Gd";
    eletrons_valencia = 2;
    break;
  case 65:
    elemento = "Térbio";
    simbolo = "Tb";
    eletrons_valencia = 2;
    break;
  case 66:
    elemento = "Disprósio";
    simbolo = "Dy";
    eletrons_valencia = 2;
    break;
  case 67:
    elemento = "Hólmio";
    simbolo = "Ho";
    eletrons_valencia = 2;
    break;
  case 68:
    elemento = "Érbio";
    simbolo = "Er";
    eletrons_valencia = 2;
    break;
  case 69:
    elemento = "Túlio";
    simbolo = "Tm";
    eletrons_valencia = 2;
    break;
  case 70:
    elemento = "Itérbio";
    simbolo = "Yb";
    eletrons_valencia = 2;
    break;
  case 71:
    elemento = "Lutécio";
    simbolo = "Lu";
    eletrons_valencia = 2;
    break;
  case 72:
    elemento = "Háfnio";
    simbolo = "Hf";
    eletrons_valencia = 2;
    break;
  case 73:
    elemento = "Tântalo";
    simbolo = "Ta";
    eletrons_valencia = 2;
    break;
  case 74:
    elemento = "Tungstênio";
    simbolo = "W";
    eletrons_valencia = 2;
    break;
  case 75:
    elemento = "Rênio";
    simbolo = "Re";
    eletrons_valencia = 2;
    break;
  case 76:
    elemento = "Ósmio";
    simbolo = "Os";
    eletrons_valencia = 2;
    break;
  case 77:
    elemento = "Irídio";
    simbolo = "Ir";
    eletrons_valencia = 2;
    break;
  case 78:
    elemento = "Platina";
    simbolo = "Pt";
    eletrons_valencia = 1;
    break;
  case 79:
    elemento = "Ouro";
    simbolo = "Au";
    eletrons_valencia = 1;
    break;
  case 80:
    elemento = "Mercúrio";
    simbolo = "Hg";
    eletrons_valencia = 2;
    break;
  case 81:
    elemento = "Tálio";
    simbolo = "Tl";
    eletrons_valencia = 3;
    break;
  case 82:
    elemento = "Chumbo";
    simbolo = "Pb";
    eletrons_valencia = 4;
    break;
  case 83:
    elemento = "Bismuto";
    simbolo = "Bi";
    eletrons_valencia = 5;
    break;
  case 84:
    elemento = "Polônio";
    simbolo = "Po";
    eletrons_valencia = 6;
    break;
  case 85:
    elemento = "Astato";
    simbolo = "At";
    eletrons_valencia = 7;
    break;
  case 86:
    elemento = "Radônio";
    simbolo = "Rn";
    eletrons_valencia = 8;
    break;
  case 87:
    elemento = "Frâncio";
    simbolo = "Fr";
    eletrons_valencia = 1;
    break;
  case 88:
    elemento = "Rádio";
    simbolo = "Ra";
    eletrons_valencia = 2;
    break;
  case 89:
    elemento = "Actínio";
    simbolo = "Ac";
    eletrons_valencia = 2;
    break;
  case 90:
    elemento = "Tório";
    simbolo = "Th";
    eletrons_valencia = 2;
    break;
  case 91:
    elemento = "Protactínio";
    simbolo = "Pa";
    eletrons_valencia = 2;
    break;
  case 92:
    elemento = "Urânio";
    simbolo = "U";
    eletrons_valencia = 2;
    break;
  case 93:
    elemento = "Netúnio";
    simbolo = "Np";
    eletrons_valencia = 2;
    break;
  case 94:
    elemento = "Plutônio";
    simbolo = "Pu";
    eletrons_valencia = 2;
    break;
  case 95:
    elemento = "Amerício";
    simbolo = "Am";
    eletrons_valencia = 2;
    break;
  case 96:
    elemento = "Cúrio";
    simbolo = "Cm";
    eletrons_valencia = 2;
    break;
  case 97:
    elemento = "Berquélio";
    simbolo = "Bk";
    eletrons_valencia = 2;
    break;
  case 98:
    elemento = "Califórnio";
    simbolo = "Cf";
    eletrons_valencia = 2;
    break;
  case 99:
    elemento = "Einstênio";
    simbolo = "Es";
    eletrons_valencia = 2;
    break;
  case 100:
    elemento = "Férmio";
    simbolo = "Fm";
    eletrons_valencia = 2;
    break;
  case 101:
    elemento = "Mendelévio";
    simbolo = "Md";
    eletrons_valencia = 2;
    break;
  case 102:
    elemento = "Nobélio";
    simbolo = "No";
    eletrons_valencia = 2;
    break;
  case 103:
    elemento = "Laurêncio";
    simbolo = "Lr";
    eletrons_valencia = 3;
    break;
  case 104:
    elemento = "Rutherfórdio";
    simbolo = "Rf";
    eletrons_valencia = 2;
    break;
  case 105:
    elemento = "Dúbnio";
    simbolo = "Db";
    eletrons_valencia = 2;
    break;
  case 106:
    elemento = "Seabórgio";
    simbolo = "Sg";
    eletrons_valencia = 2;
    break;
  case 107:
    elemento = "Bóhrio";
    simbolo = "Bh";
    eletrons_valencia = 2;
    break;
  case 108:
    elemento = "Hássio";
    simbolo = "Hs";
    eletrons_valencia = 2;
    break;
  case 109:
    elemento = "Meitnério";
    simbolo = "Mt";
    eletrons_valencia = 2;
    break;
  case 110:
    elemento = "Darmstádio";
    simbolo = "Ds";
    eletrons_valencia = 2;
    break;
  case 111:
    elemento = "Roentgênio";
    simbolo = "Rg";
    eletrons_valencia = 2;
    break;
  case 112:
    elemento = "Copernício";
    simbolo = "Cn";
    eletrons_valencia = 2;
    break;
  case 113:
    elemento = "Nihônio";
    simbolo = "Nh";
    eletrons_valencia = 3;
    break;
  case 114:
    elemento = "Fleróvio";
    simbolo = "Fl";
    eletrons_valencia = 4;
    break;
  case 115:
    elemento = "Moscóvio";
    simbolo = "Mc";
    eletrons_valencia = 5;
    break;
  case 116:
    elemento = "Livermório";
    simbolo = "Lv";
    eletrons_valencia = 6;
    break;
  case 117:
    elemento = "Tenessino";
    simbolo = "Ts";
    eletrons_valencia = 7;
    break;
  case 118:
    elemento = "Oganessônio";
    simbolo = "Og";
    eletrons_valencia = 8;
    break;
  default:
    elemento = "Elemento não encontrado";
    simbolo = "";
    eletrons_valencia = 0;
    break;
}


  if (numeroAtomico >= 1 && numeroAtomico <= 2) {
    camada_valencia = "K";
 //   eletrons_camada = 2;
    subnivel_mais_energetico = "1s";
  } else if (numeroAtomico >= 3 && numeroAtomico <= 10) {
    camada_valencia = "L";
  //  eletrons_camada = 8;
    subnivel_mais_energetico = "2s";
  } else if (numeroAtomico >= 11 && numeroAtomico <= 18) {
    camada_valencia = "M";
   // eletrons_camada = 18;
    subnivel_mais_energetico = "3s";
  } else if (numeroAtomico >= 19 && numeroAtomico <= 36) {
    camada_valencia = "N";
   // eletrons_camada = 32;
    subnivel_mais_energetico = "4s";
  } else if (numeroAtomico >= 37 && numeroAtomico <= 54) {
    camada_valencia = "O";
  //  eletrons_camada = 32;
    subnivel_mais_energetico = "5s";
  } else if (numeroAtomico >= 55 && numeroAtomico <= 86) {
    camada_valencia = "P";
  //  eletrons_camada = 18;
    subnivel_mais_energetico = "6s";
  } else if (numeroAtomico >= 87 && numeroAtomico <= 112) {
    camada_valencia = "Q";
 //   eletrons_camada = 2;
    subnivel_mais_energetico = "7s";
  }


  distribuicao_eletronica = [];
  eletroDistribuicao(numeroAtomico);

  eletroDist.innerHTML = distribuicao_eletronica.join(" ");
  valencia.innerHTML = camada_valencia;
  eletronsValenciaHTML.innerHTML = eletrons_valencia;
  subnivelEnergetico.innerHTML = subnivel_mais_energetico;
  eletronsSubnivel.innerHTML = eletrons_subnivel;
  elementoHTML.innerHTML = elemento;
  simboloHTML.innerHTML = simbolo;
;

// Função da distribuição eletrônica 🤓🥸

function eletroDistribuicao(numeroAtomico) {
  const subniveis = ["1s", "2s", "2p", "3s", "3p", "4s", "3d", "4p", "5s", "4d", "5p", "6s", "4f", "5d", "6p", "7s", "5f", "6d"];

  let eletronsRestantes = numeroAtomico;
  let indiceSubnivel = 0;

  while (eletronsRestantes > 0 && indiceSubnivel < subniveis.length) {
    const subnivelAtual = subniveis[indiceSubnivel];
    const maxEletrons = subnivelAtual.includes("s") ? 2 : subnivelAtual.includes("p") ? 6 : subnivelAtual.includes("d") ? 10 : 14;
    const eletronsSubnivel = Math.min(eletronsRestantes, maxEletrons);

    distribuicao_eletronica.push(`${subnivelAtual}^${eletronsSubnivel}` + ";");
    eletronsRestantes -= eletronsSubnivel;

    indiceSubnivel++;
  }

  while (eletronsRestantes > 0) {
    const subnivelAtual = subniveis[subniveis.length - 1];
    const maxEletrons = subnivelAtual.includes("s") ? 2 : subnivelAtual.includes("p") ? 6 : subnivelAtual.includes("d") ? 10 : 14;
    const eletronsSubnivel = Math.min(eletronsRestantes, maxEletrons);

    distribuicao_eletronica.push(`${subnivelAtual}^${eletronsSubnivel}` + ";");
    eletronsRestantes -= eletronsSubnivel;
  }

  if (distribuicao_eletronica.length > 0) {
    const ultimaDistribuicao = distribuicao_eletronica[distribuicao_eletronica.length - 1];
    const [subnivel, eletronsSubnivel] = ultimaDistribuicao.split('^');
    subnivel_mais_energetico = subnivel;
    eletrons_subnivel = parseInt(eletronsSubnivel);
  } else {
    subnivel_mais_energetico = "";
    eletrons_subnivel = 0;
  }
}
  });
  
