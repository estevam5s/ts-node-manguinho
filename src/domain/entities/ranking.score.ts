// metodo = clase, propriedades para seguir = type.
export type RankingScore = {
  // regras de negocio que valem para qualquer lugar.
  player: Player
  score: number
  matchDate: Date
  heroes: Hero[]
}

type Player = {
  name: string
  country: string
}

type Hero = {
  name: string
  level: number
}
