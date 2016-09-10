let Utils = {
  findPokemon: function(pokemon, PokemonList) {
    return PokemonList.find((poke) =>
      poke.name.toLowerCase() === pokemon.name.toLowerCase());
  },

  move: function(array, fromIndex, toIndex) {
    return array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
  }
};

module.exports = Utils;
