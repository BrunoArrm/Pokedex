export const getPokemons = async (limit, offset) => { // Função assincrona recebe dois valores
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("getPokemonErro: ", error);
  }
};

export const getPokemonData = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    let erro = error;
    if (erro.message.indexOf("Not Found") >= 0) {
      erro = "Pokemon não encontrado";
      return erro;
    } else {
      let erro = "Não deu erro";
      console.log("Não deu erro");
      return erro;
    }
  }
};
