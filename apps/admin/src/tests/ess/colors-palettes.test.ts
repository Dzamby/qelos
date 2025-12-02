import { describe, it, expect } from 'vitest'
import { PALETTES } from '../../modules/core/utils/colors-palettes'

describe('colors-palettes basic check', () => {
  it('should load palettes', () => {
    expect(PALETTES).toBeDefined()
    expect(PALETTES.length > 0).toBe(true)
  })

  it('should have name and colors in first palette', () => {
    const first = PALETTES[0]
    expect(first.name).not.toBe('')
    expect(first.colors.length > 0).toBe(true)
  })
})
