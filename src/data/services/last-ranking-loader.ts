import { ILastRankingLoader } from '@/domain/useCases'
import { ILoaderLastRankingRepository } from '@/data/interfaces'
import { RankingScore } from '@/domain/entities'
import { RankingError } from '@/domain/errors/ranking.error'

export class LastRankingLoaderService implements ILastRankingLoader {
  // readonly - apenas dentro do construtor
  constructor(
    private readonly LoaderLastRankingRepository: ILoaderLastRankingRepository,
  ) {}

  // implementa outra interface
  async loader(): Promise<RankingScore[]> {
    if (new Date().getHours() > 21) {
      throw new RankingError()
    }
    return this.LoaderLastRankingRepository.loaderLastRanking()
  }
}
