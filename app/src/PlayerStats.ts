import { Player } from "./Player";


export class PlayerStats {
    sortByGoals(): { nombre: string, goles: number }[] {
        return Player.PlayersData.map(player => ({
          nombre: player.nombre +' '+ player.apellido,
          goles: player.goles
        })).sort((a, b) => b.goles - a.goles);
      }
      sortByShots():{ nombre: string, disparos: number }[]{
        return Player.PlayersData.map(player => ({
          nombre: player.nombre +' '+ player.apellido,
          disparos: player.disparos
        })).sort((a,b)=> b.disparos - a.disparos);
      }
      
      sortBypasses ():{ nombre: string, pases: number }[]{
        return Player.PlayersData.map(player=>({
          nombre: player.nombre +' '+ player.apellido,
          pases: player.pases
        })).sort((a,b)=> b.pases - a.pases);
      }
      sortByAssists ():{ nombre: string, asistencias: number }[]{
        return Player.PlayersData.map(player=>({
          nombre: player.nombre +' '+ player.apellido,
          asistencias: player.asistencias
        })).sort((a,b)=> b.asistencias - a.asistencias);
      }
      sortByRecoverys ():{ nombre: string, recuperaciones: number }[]{
        return Player.PlayersData.map(player=>({
          nombre: player.nombre +' '+ player.apellido,
          recuperaciones: player.recuperaciones
        })).sort((a,b)=> b.recuperaciones - a.recuperaciones);
      }
      sortByYellowCard ():{ nombre: string, tarjetas_Amarillas: number }[]{
        return Player.PlayersData.map(player=>({
          nombre: player.nombre +' '+ player.apellido,
          tarjetas_Amarillas: player.tarjetasAm
        })).sort((a,b)=> b.tarjetas_Amarillas - a.tarjetas_Amarillas);
      }
      sortByRedCard ():{ nombre: string, tarjetas_Rojas: number }[]{
        return Player.PlayersData.map(player=>({
          nombre: player.nombre +' '+ player.apellido,
          tarjetas_Rojas: player.tarjetasRo
        })).sort((a,b)=> b.tarjetas_Rojas - a.tarjetas_Rojas);
      }
      sortByFouls (): { nombre: string, faltas: number }[]{
        return Player.PlayersData.map(player=>({
          nombre: player.nombre +' '+ player.apellido,
          faltas: player.faltas
        })).sort((a,b)=> b.faltas - a.faltas);
      }
    

} 