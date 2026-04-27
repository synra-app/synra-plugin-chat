export type ChatWorkerRequest = {
  channel?: string
  body: string
}

export type ChatWorkerResult = {
  channel: string
  normalizedBody: string
  createdAt: number
}

export function buildChatWorkerPayload(input: ChatWorkerRequest): ChatWorkerResult {
  return {
    channel: input.channel?.trim() || 'default',
    normalizedBody: input.body.trim(),
    createdAt: Date.now()
  }
}

