import { IController } from '@/presentation/contracts'

import { Request, Response } from 'express'

export const adaptResolver = async (controller: IController): Promise<any> => {
  const httpResponse = await controller.handle()
  return httpResponse.data
}
