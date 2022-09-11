import { RankingScore } from '@/domain/entities'

export class RankingScoreViewModel {
  player: Player
  score: number
  matchDate: string
  heroes: Hero[]

  static map(entity: RankingScore): RankingScoreViewModel {
    return {
      ...entity,
      matchDate: entity.matchDate.toISOString(),
    }
  }

  static mapCollection(entities: RankingScore[]): RankingScoreViewModel[] {
    return entities.map((entity) => RankingScoreViewModel.map(entity))
    // return entities.map(RankingScoreViewModel.map) // quando forem os mesmos parametros no map
  }
}

type Player = {
  name: string
  country: string
}

type Hero = {
  name: string
  level: number
}
