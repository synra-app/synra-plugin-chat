export type ChatHostActionRequest = {
  pluginId: string
  actionType: string
  payload: unknown
}

export function resolveChatHostActionLabel(input: ChatHostActionRequest): string {
  return `${input.pluginId}:${input.actionType}`
}
