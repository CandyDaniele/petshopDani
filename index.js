
const PETSHOP = "Petshop DH";

//console.log("** " + PETSHOP + " **");

console.log(`** ${PETSHOP} **`);

let pets = [
  {
    nome: "Batman",
    tipo: "cão",
     raca: "vira-lata",
    idade: 2,
    genero: "M",
    vacinado: false,
    servicos: []
  },
  {
    nome: "Lua",
    tipo: "gato",
    raca: "Siamês",
    idade: 8,
    genero: "F",
    vacinado: false,
    servicos: []
  },
  {
    nome: "Bill",
    tipo: "cão",
    raca: "Labrador",
    idade: 4,
    genero: "M",
    vacinado: false,
    servicos: []
  },
  {
    nome: "Gata",
    tipo: "gato",
    raca: "Singapura",
    idade: 3,
    genero: "F",
    vacinado: false,
    servicos: ["banho", "corte de unha"]
  },
  {
    nome: "Tom",
    tipo: "gato",
    raca: "vira-lata",
    idade: 3,
    genero: "M",
    vacinado: false,
    servicos: ["banho"]
  }
];

const anoDeNascimento = pet => 2020 -pet.idade;

const vacinarPet = pet => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        //console.log(pet.nome + " vacinado com sucesso!");
        console.log(`${pet.nome} vacinado com sucesso!`);
      } else {
        console.log("Opa, seu pet já está vacinado!");
      }
}

const listarPets = () => {
//   let contador = 0;
//   while (contador < pets.length) {
    // console.log("---------------------");
    // console.log("Nome: " + pets[contador].nome);
    // console.log("Tipo: " + pets[contador].tipo);
    // console.log("Raça: " + pets[contador].raca);
    // console.log("Idade: " + pets[contador].idade);
    // console.log(
    //   "Genero: " + (pets[contador].genero == "F" ? "Femea" : "Macho")
    // );
    // console.log("Vacinado: " + (pets[contador].vacinado ? "Sim" : "Não"));
    // console.log("Serviços: " + pets[contador].servicos);
for (let pet in pets){
    console.log(`
    -------------------------
    Nome: ${pets[pet].nome}
    Tipo: ${pets[pet].tipo}
    Raça: ${pets[pet].raca}
    Idade: ${pets[pet].idade}
    Genero: ${pets[pet].genero == "F" ? "Femea" : "Macho"}
    Vacinado: ${pets[pet].vacinado ? "Sim" : "Não"}
    Serviços: ${pets[pet].servicos}`);

    //contador++;
  }
}

listarPets();


const validarDados = dadosPet => {
    return (
        dadosPet.nome &&
        dadosPet.idade &&
        dadosPet.genero &&
        dadosPet.tipo &&
        dadosPet.raca
    );
};
const adicionarPet = novoPet => {
    if(
        typeof novoPet == "object" &&
        validarDados(novoPet)
    ){
        novoPet.nome = novoPet.nome.toString();
        novoPet.idade = parseInt(novoPet.idade);

        if(!novoPet.servicos){
            novoPet.servicos = [];
        }
        pets.push(novoPet);
        //console.log(novoPet.nome + " foi adicionado com sucesso!");
        console.log(`${novoPet.nome} foi adicionado com sucesso!`);
  } else {
        console.log("Ops, insira um objeto válido!");
  }
};

adicionarPet({
  nome: "Costelinha",
  tipo: "cão",
  raca: "vira-lata",
  idade: "6",
  genero: "M",
  vacinado: true,
  servicos: ["banho"]
});


const tosarPet = pet => {

  pet.servicos.push("tosa");
  //console.log(pet.nome + " está com pêlo aparado!");
  console.log(`${pet.nome} está com pêlo aparado!`);
};

const darBanhoPet = pet => {
    pet.servicos.push("banho");
    //console.log(pet.nome + " está de banho tomado!");
    console.log(`${pet.nome} está de banho tomado!`);
};

const cortarUnhaPet = pet => {
    pet.servicos.push("corte de unhas");
    //console.log(pet.nome + " cortou as unhas!");
    console.log(`${pet.nome} cortou as unhas!`);
} 

// const atenderPet = (pet, servicos) => {
const atenderPet = (pet, ...servicos) => {
    //console.log("Bem vindo, " + pet.nome);
    console.log(`Bem vindo, ${pet.nome}`);
    // for(let i = 0; i < servicos.length; i++){
    //     servicos[i](pet); //utilizando callbak
    // }

    for(let servico of servicos){
        servico(pet);
    }

    const pagar = () => {
        console.log("Pagamento realizado com sucesso!");
    };

    pagar();
    console.log("Volte sempre!");
};

// tosarPet(pets[0]);
// darBanhoPet(pets[0]);
// cortarUnhaPet(pets[0]);

// console.log(pets[0]);

// atenderPet(pets[0], [cortarUnhaPet, darBanhoPet, tosarPet]);
atenderPet(pets[0], cortarUnhaPet, darBanhoPet, tosarPet);

const contarVacinados = (listaPets) => {
    let countVacinados = 0;
    let countNaoVacinados = 0;
    // for (let i = 0; i < listaPets.length; i++) {
    //    if(listaPets[i].vacinado){
    //     countVacinados++;
    //    } else {
    //     countNaoVacinados++;
    //    }
    // }



    for (let listapet of listaPets){
        if(listapet.vacinado){
         countVacinados++;
        } else {
         countNaoVacinados++;
        }
     }
    //console.log("Foram encontrados " + countNaoVacinados + " pets não vacinados");
    console.log(`Foram encontrados ${countNaoVacinados} pets não vacinados`);
    //console.log("Foram encontrados " + countVacinados + " pets vacinados");
    console.log(`Foram encontrados ${countVacinados} pets vacinados`);
}
const campanhaVacina = (listaPets) => {
   let countCampanha = 0;
//     for (let i = 0; i < listaPets.length; i++) {
//        if(!listaPets[i].vacinado){
//            countCampanha++
//            vacinarPet(listaPets[i]);
//        }
//    }


for (let listapet of listaPets) {
    if(!listapet.vacinado){
        countCampanha++
        vacinarPet(listapet);
    }
}


   //console.log(countCampanha + " pets foram vacinados nessa campanha!");
   console.log(`${countCampanha} pets foram vacinados nessa campanha!`);
}

contarVacinados(pets);

campanhaVacina(pets);

contarVacinados(pets);


/* contarVacinados da Hendy
const contarVacinados = () => {
    let vacinados = pets.filter(pet => )
}
*/


const buscarPetPeloNome = (nomepet) => {
    for (let listapet of pets){
        if(listapet.nome == nomepet){
            console.log(`
            -------------------------
            Nome: ${listapet.nome}
            Tipo: ${listapet.tipo}
            Raça: ${listapet.raca}
            Idade: ${listapet.idade}
            Genero: ${listapet.genero == "F" ? "Femea" : "Macho"}
            Vacinado: ${listapet.vacinado ? "Sim" : "Não"}
            Serviços: ${listapet.servicos}`);

        }
      }
    }
    
    console.log(buscarPetPeloNome("Batman"));


