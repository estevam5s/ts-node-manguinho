import { makeLoaderLastRankingController } from '@/main/factories'
import { adaptRoute } from '@/main/adapters'

import { Router } from 'express'

export default (router: Router): void => {
  router.get('/rankings/last', adaptRoute(makeLoaderLastRankingController()))
}
