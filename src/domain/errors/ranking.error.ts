export class RankingError extends Error {
  constructor() {
    super('Ranking unavailable')
    this.name = 'RankingError'
  }
}
