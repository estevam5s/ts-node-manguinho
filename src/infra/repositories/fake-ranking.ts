import { ILoaderLastRankingRepository } from '@/data/interfaces'
import { RankingScoreModel } from '@/data/models'
import { ranking } from '@/infra/data-sources'

export class FakeRankingRepository implements ILoaderLastRankingRepository {
  async loaderLastRanking(): Promise<RankingScoreModel[]> {
    return ranking.map((values) => ({
      player: values.user,
      score: values.score,
      matchDate: new Date(values.date),
      heroes: values.heroes,
    }))
  }
}
