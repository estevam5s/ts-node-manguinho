import { RankingScore } from '@/domain/entities'

export interface ILastRankingLoader {
  loader: () => Promise<RankingScore[]>
}
