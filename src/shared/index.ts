export function normalizeChatChannel(input: string | undefined): string {
  const normalized = input?.trim()
  return normalized && normalized.length > 0 ? normalized : 'default'
}
