import {
  IController,
  HttpResponse,
  serverError,
  ok,
} from '@/presentation/contracts'
import { RankingScoreViewModel } from '@/presentation/view-models'
import { LastRankingLoaderService } from '@/data/services/last-ranking-loader'

export class LoaderLastRankingController implements IController {
  constructor(
    private readonly LastRankingLoaderService: LastRankingLoaderService,
  ) {}

  async handle(): Promise<HttpResponse<RankingScoreViewModel[]>> {
    try {
      const ranking = await this.LastRankingLoaderService.loader()
      return ok(RankingScoreViewModel.mapCollection(ranking))
    } catch (e) {
      return serverError(e)
    }
  }
}
