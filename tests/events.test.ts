import { expect, test } from 'vite-plus/test'
import { CHAT_TEXT_EVENT } from '../src/shared/events'

test('chat text event constant is stable', () => {
  expect(CHAT_TEXT_EVENT).toBe('custom.chat.text')
})
