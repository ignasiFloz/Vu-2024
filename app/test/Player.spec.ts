import { PlayersData } from "../src/PlayerData";
import { PlayerStats } from "../src/PlayerStats";


const playerDB = new PlayersData()
playerDB.loadPlayers()
const playerStats = new PlayerStats()


const goalsWinner = 'Caroline Hansen';
const shotsWinner = 'Claudia Pina';
const passesWinner = 'Patri Guijarro';
const assistWinner = 'Caroline Hansen';
const recoveryWinner = 'Lucy Bronze';
const yellowCards = 'Irene Paredes';
const redCards = 'Sandra Panos';
const mostFouls = 'Alexia Putellas'


describe('sortByGoals', () => {
  it('debería ordenar los jugadores por goles en orden descendente', () => {
    const result = playerStats.sortByGoals();
    expect(result[0].nombre).toEqual(goalsWinner);
  });
});



describe('sortByShots', () => {
  it('debería ordenar los jugadores por disparos en orden descendente', () => {
    const result = playerStats.sortByShots();
    expect(result[0].nombre).toEqual(shotsWinner);
  });
});



describe('sortBypasses', () => {
  it('debería ordenar los jugadores por pases en orden descendente', () => {
    const result = playerStats.sortBypasses();
    expect(result[0].nombre).toEqual(passesWinner);
  });
});



describe('sortByAssists', () => {
  it('debería ordenar los jugadores por asistencias en orden descendente', () => {
    const result = playerStats.sortByAssists();
    expect(result[0].nombre).toEqual( assistWinner );
  });
});



describe('sortByRecoverys', () => {
  it('debería ordenar los jugadores por recuperaciones en orden descendente', () => {
    const result = playerStats.sortByRecoverys();
    expect(result[0].nombre).toEqual( recoveryWinner );
  });
});



describe('sortByYellowCard', () => {
  it('debería ordenar los jugadores por tarjetas amarillas en orden descendente', () => {
    const result = playerStats.sortByYellowCard();
    expect(result[0].nombre).toEqual( yellowCards );
  });
});



describe('sortByRedCard', () => {
  it('debería ordenar los jugadores por tarjetas rojas en orden descendente', () => {
    const result = playerStats.sortByRedCard();
    expect(result[0].nombre).toEqual( redCards );
  });
});



describe('sortByFouls', () => {
  it('debería ordenar los jugadores por faltas en orden descendente', () => {
    const result = playerStats.sortByFouls();
    expect(result[0].nombre).toEqual( mostFouls );
  });
});



