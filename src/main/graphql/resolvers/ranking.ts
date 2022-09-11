import { makeLoaderLastRankingController } from '@/main/factories'
import { adaptResolver } from '@/main/adapters'

export default {
  Query: {
    lastRanking: async (): Promise<any> =>
      adaptResolver(makeLoaderLastRankingController()),
  },
}
