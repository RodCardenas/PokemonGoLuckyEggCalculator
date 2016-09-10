import Realm from 'realm';
import PokemonModel from './PokemonModel';

let repository = new Realm({
  schema: [{
    name: 'Pokemon',
    primaryKey: 'id',
    properties: {
      id: 'int',
      name: { type: 'string', indexed: true },
      candyToEvolve: 'int'
  	}
  }]
});

let PokemonService = {
  findAll: function() {
    return repository.objects('Pokemon').sorted(['id']);
  },

  save: function(pokemon) {
    if (repository.objects('Pokemon').filtered("name = '" + pokemon.name + "'").length) return;

    repository.write(() => {
      repository.create('Pokemon', {
        id: pokemon.id,
        name: pokemon.name,
        candyToEvolve: pokemon.candyToEvolve
      });
    });
  },
};

var id = 1;
PokemonService.save(new PokemonModel(id++, 'Bulbasaur', 25));
PokemonService.save(new PokemonModel(id++, 'Ivysaur', 100));
PokemonService.save(new PokemonModel(id++, 'Venusaur', 0));
PokemonService.save(new PokemonModel(id++, 'Charmander', 25));
PokemonService.save(new PokemonModel(id++, 'Charmeleon', 100));
PokemonService.save(new PokemonModel(id++, 'Charizard', 0));
PokemonService.save(new PokemonModel(id++, 'Squirtle', 25));
PokemonService.save(new PokemonModel(id++, 'Wartortle', 100));
PokemonService.save(new PokemonModel(id++, 'Blastoise', 0));
PokemonService.save(new PokemonModel(id++, 'Caterpie', 12));
PokemonService.save(new PokemonModel(id++, 'Metapod', 50));
PokemonService.save(new PokemonModel(id++, 'Butterfree', 0));
PokemonService.save(new PokemonModel(id++, 'Weedle', 12));
PokemonService.save(new PokemonModel(id++, 'Kakuna', 50));
PokemonService.save(new PokemonModel(id++, 'Beedrill', 0));
PokemonService.save(new PokemonModel(id++, 'Pidgey', 12));
PokemonService.save(new PokemonModel(id++, 'Pidgeotto', 50));
PokemonService.save(new PokemonModel(id++, 'Pidgeot', 0));
PokemonService.save(new PokemonModel(id++, 'Rattata', 25));
PokemonService.save(new PokemonModel(id++, 'Raticate', 0));
PokemonService.save(new PokemonModel(id++, 'Spearow', 50));
PokemonService.save(new PokemonModel(id++, 'Fearow', 0));
PokemonService.save(new PokemonModel(id++, 'Ekans', 50));
PokemonService.save(new PokemonModel(id++, 'Arbok', 0));
PokemonService.save(new PokemonModel(id++, 'Pikachu', 50));
PokemonService.save(new PokemonModel(id++, 'Raichu', 0));
PokemonService.save(new PokemonModel(id++, 'Sandshrew', 50));
PokemonService.save(new PokemonModel(id++, 'Snadslash', 50));
PokemonService.save(new PokemonModel(id++, 'Nidoran ♀', 25));
PokemonService.save(new PokemonModel(id++, 'Nidorina', 100));
PokemonService.save(new PokemonModel(id++, 'Nidoqueen', 0));
PokemonService.save(new PokemonModel(id++, 'Nidoran ♂', 25));
PokemonService.save(new PokemonModel(id++, 'Nidorino', 100));
PokemonService.save(new PokemonModel(id++, 'Nidoking', 0));
PokemonService.save(new PokemonModel(id++, 'Clefairy', 50));
PokemonService.save(new PokemonModel(id++, 'Clefable', 0));
PokemonService.save(new PokemonModel(id++, 'Vulpix', 50));
PokemonService.save(new PokemonModel(id++, 'Ninetales', 0));
PokemonService.save(new PokemonModel(id++, 'Jigglypuff', 50));
PokemonService.save(new PokemonModel(id++, 'Wigglytuff', 0));
PokemonService.save(new PokemonModel(id++, 'Zubat', 50));
PokemonService.save(new PokemonModel(id++, 'Golbat', 0));
PokemonService.save(new PokemonModel(id++, 'Oddish', 25));
PokemonService.save(new PokemonModel(id++, 'Gloom', 100));
PokemonService.save(new PokemonModel(id++, 'Vileplume', 0));
PokemonService.save(new PokemonModel(id++, 'Paras', 25));
PokemonService.save(new PokemonModel(id++, 'Parasect', 0));
PokemonService.save(new PokemonModel(id++, 'Venonat', 50));
PokemonService.save(new PokemonModel(id++, 'Venomoth', 0));
PokemonService.save(new PokemonModel(id++, 'Diglett', 50));
PokemonService.save(new PokemonModel(id++, 'Dugtrio', 0));
PokemonService.save(new PokemonModel(id++, 'Meowth', 50));
PokemonService.save(new PokemonModel(id++, 'Persian', 0));
PokemonService.save(new PokemonModel(id++, 'Psyduck', 50));
PokemonService.save(new PokemonModel(id++, 'Golduck', 0));
PokemonService.save(new PokemonModel(id++, 'Mankey', 50));
PokemonService.save(new PokemonModel(id++, 'Primeape', 0));
PokemonService.save(new PokemonModel(id++, 'Growlithe', 50));
PokemonService.save(new PokemonModel(id++, 'Arcanine', 0));
PokemonService.save(new PokemonModel(id++, 'Poliwag', 25));
PokemonService.save(new PokemonModel(id++, 'Poliwhirl', 100));
PokemonService.save(new PokemonModel(id++, 'Poliwrath', 0));
PokemonService.save(new PokemonModel(id++, 'Abra', 25));
PokemonService.save(new PokemonModel(id++, 'Kadabra', 100));
PokemonService.save(new PokemonModel(id++, 'Alakazam', 0));
PokemonService.save(new PokemonModel(id++, 'Machop', 25));
PokemonService.save(new PokemonModel(id++, 'Machoke', 100));
PokemonService.save(new PokemonModel(id++, 'Machamp', 0));
PokemonService.save(new PokemonModel(id++, 'Bellsprout', 25));
PokemonService.save(new PokemonModel(id++, 'Weepinbell', 100));
PokemonService.save(new PokemonModel(id++, 'Victreebel', 0));
PokemonService.save(new PokemonModel(id++, 'Tentacool', 25));
PokemonService.save(new PokemonModel(id++, 'Tentacruel', 0));
PokemonService.save(new PokemonModel(id++, 'Geodude', 25));
PokemonService.save(new PokemonModel(id++, 'Graveler', 100));
PokemonService.save(new PokemonModel(id++, 'Golem', 0));
PokemonService.save(new PokemonModel(id++, 'Ponyta', 50));
PokemonService.save(new PokemonModel(id++, 'Rapidash', 0));
PokemonService.save(new PokemonModel(id++, 'Slowpoke', 50));
PokemonService.save(new PokemonModel(id++, 'Slowbro', 0));
PokemonService.save(new PokemonModel(id++, 'Magnemite', 50));
PokemonService.save(new PokemonModel(id++, 'Magneton', 0));
PokemonService.save(new PokemonModel(id++, "Farfetchd", 0));
PokemonService.save(new PokemonModel(id++, 'Doduo', 50));
PokemonService.save(new PokemonModel(id++, 'Dodrio', 0));
PokemonService.save(new PokemonModel(id++, 'Seel', 50));
PokemonService.save(new PokemonModel(id++, 'Dewgong', 0));
PokemonService.save(new PokemonModel(id++, 'Grimer', 50));
PokemonService.save(new PokemonModel(id++, 'Muck', 0));
PokemonService.save(new PokemonModel(id++, 'Shellder', 50));
PokemonService.save(new PokemonModel(id++, 'Cloyster', 0));
PokemonService.save(new PokemonModel(id++, 'Gastly', 25));
PokemonService.save(new PokemonModel(id++, 'Haunter', 100));
PokemonService.save(new PokemonModel(id++, 'Gengar', 0));
PokemonService.save(new PokemonModel(id++, 'Onix', 0));
PokemonService.save(new PokemonModel(id++, 'Drowzee', 50));
PokemonService.save(new PokemonModel(id++, 'Hypno', 0));
PokemonService.save(new PokemonModel(id++, 'Krabby', 50));
PokemonService.save(new PokemonModel(id++, 'Kingler', 0));
PokemonService.save(new PokemonModel(id++, 'Voltorb', 50));
PokemonService.save(new PokemonModel(id++, 'Electrode', 0));
PokemonService.save(new PokemonModel(id++, 'Exeggcute', 50));
PokemonService.save(new PokemonModel(id++, 'Exeguttor', 0));
PokemonService.save(new PokemonModel(id++, 'Cubone', 50));
PokemonService.save(new PokemonModel(id++, 'Marowak', 0));
PokemonService.save(new PokemonModel(id++, 'Hitmonlee', 0));
PokemonService.save(new PokemonModel(id++, 'Hitmonchan', 0));
PokemonService.save(new PokemonModel(id++, 'Lickitung', 0));
PokemonService.save(new PokemonModel(id++, 'Koffing', 50));
PokemonService.save(new PokemonModel(id++, 'Weezing', 0));
PokemonService.save(new PokemonModel(id++, 'Rhyhorn', 50));
PokemonService.save(new PokemonModel(id++, 'Rhydon', 0));
PokemonService.save(new PokemonModel(id++, 'Chansey', 0));
PokemonService.save(new PokemonModel(id++, 'Tangela', 0));
PokemonService.save(new PokemonModel(id++, 'Kangaskhan', 0));
PokemonService.save(new PokemonModel(id++, 'Horsea', 50));
PokemonService.save(new PokemonModel(id++, 'Seadra', 0));
PokemonService.save(new PokemonModel(id++, 'Goldeen', 0));
PokemonService.save(new PokemonModel(id++, 'Seaking', 50));
PokemonService.save(new PokemonModel(id++, 'Staryu', 50));
PokemonService.save(new PokemonModel(id++, 'Starmie', 0));
PokemonService.save(new PokemonModel(id++, 'Mr. Mime', 0));
PokemonService.save(new PokemonModel(id++, 'Scyther', 0));
PokemonService.save(new PokemonModel(id++, 'Jynx', 0));
PokemonService.save(new PokemonModel(id++, 'Electabuzz', 0));
PokemonService.save(new PokemonModel(id++, 'Magmar', 0));
PokemonService.save(new PokemonModel(id++, 'Pinsir', 0));
PokemonService.save(new PokemonModel(id++, 'Tauros', 0));
PokemonService.save(new PokemonModel(id++, 'Magikarp', 400));
PokemonService.save(new PokemonModel(id++, 'Gyarados', 0));
PokemonService.save(new PokemonModel(id++, 'Lapras', 0));
PokemonService.save(new PokemonModel(id++, 'Ditto', 0));
PokemonService.save(new PokemonModel(id++, 'Eevee', 25));
PokemonService.save(new PokemonModel(id++, 'Vaporeon', 0));
PokemonService.save(new PokemonModel(id++, 'Jolteon', 0));
PokemonService.save(new PokemonModel(id++, 'Flareon', 0));
PokemonService.save(new PokemonModel(id++, 'Porygon', 0));
PokemonService.save(new PokemonModel(id++, 'Omanyte', 50));
PokemonService.save(new PokemonModel(id++, 'Omastar', 0));
PokemonService.save(new PokemonModel(id++, 'Kabuto', 50));
PokemonService.save(new PokemonModel(id++, 'Kabutops', 50));
PokemonService.save(new PokemonModel(id++, 'Aerodactyl', 0));
PokemonService.save(new PokemonModel(id++, 'Snorlax', 0));
PokemonService.save(new PokemonModel(id++, 'Articuno', 0));
PokemonService.save(new PokemonModel(id++, 'Zapdos', 0));
PokemonService.save(new PokemonModel(id++, 'Moltres', 0));
PokemonService.save(new PokemonModel(id++, 'Dratini', 25));
PokemonService.save(new PokemonModel(id++, 'Dragonair', 100));
PokemonService.save(new PokemonModel(id++, 'Dragonite', 0));
PokemonService.save(new PokemonModel(id++, 'Mewtwo', 0));
PokemonService.save(new PokemonModel(id++, 'Mew', 0));

module.exports = PokemonService;
