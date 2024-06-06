import { Player } from "./Player";
import * as readline from 'readline';
import { PlayerStats } from "./PlayerStats";
import { PlayersData } from "./PlayerData";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const playersData = new PlayersData();
const player = new PlayerStats();
playersData.loadPlayers()
const db = Player.PlayersData
const mensaje = "Elige un número entre 1 y 8 :\n\n" +
                "1. Listado de jugadoras con más goles\n" +
                "2. Listado de jugadoras con más disparos\n" +
                "3. Listado de jugadoras con más pases\n" +
                "4. Listado de jugadoras con más asistencias\n" +
                "5. Listado de jugadoras con más recuperaciones\n" +
                "6. Listado de jugadoras con más tarjetas amarillas\n" +
                "7. Listado de jugadoras con más tarjetas rojas\n" +
                "8. Listado de jugadoras con más faltas\n\n" +
                "Presiona 9 para salir del programa.\n\n" +
                ":  ";

function ordenarJugadoras(){
    rl.question(mensaje, (input) => {


        const ClientChoice = parseInt(input);
        switch (ClientChoice) {
            case 1: 
                console.log(player.sortByGoals());
                break;
            case 2:
                console.log(player.sortByShots());
                break;
            case 3:
                console.log(player.sortBypasses());
                break;
            case 4:
                console.log(player.sortByAssists());
                break;
            case 5:
                console.log(player.sortByRecoverys());
                break;
            case 6:
                console.log(player.sortByYellowCard());
                break;
            case 7:
                console.log(player.sortByRedCard());
                break;
            case 8:
                console.log(player.sortByFouls());
                break;
            default:
            console.log('Gracias por usar mi programa.')
    }
        if (ClientChoice !== 9) {
            ordenarJugadoras();
        }else{
            rl.close()
        }
    })
}
ordenarJugadoras()
