import { describe, it, expect } from 'vitest'
import { getItem, setItem, removeItem } from '../../modules/core/utils/storage'

describe('storage utils (simple test)', () => {
  it('should run setItem, getItem and removeItem without crashing', () => {
    // vytvoríme dočasný fake localStorage
    const store: Record<string, string> = {}
    globalThis.localStorage = {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => { store[key] = value },
      removeItem: (key: string) => { delete store[key] }
    } as any

    setItem('demo', { test: true })
    const result = getItem('demo')
    removeItem('demo')

    // ocakavania
    expect(result).toEqual({ test: true })
    expect(store['demo']).toBeUndefined()
  })
})
