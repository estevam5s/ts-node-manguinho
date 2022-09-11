import { LoaderLastRankingController } from '@/presentation/controllers/loader-last-ranking'
import { LastRankingLoaderService } from '@/data/services/last-ranking-loader'
import { FakeRankingRepository } from '@/infra/repositories/fake-ranking'
import { IController } from '@/presentation/contracts'

export const makeLoaderLastRankingController = (): IController => {
  const repo = new FakeRankingRepository()
  const loeader = new LastRankingLoaderService(repo)
  return new LoaderLastRankingController(loeader)
}
