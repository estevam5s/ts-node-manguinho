import { RankingScoreModel } from '@/data/models'

export interface ILoaderLastRankingRepository {
  loaderLastRanking: () => Promise<RankingScoreModel[]>
}
