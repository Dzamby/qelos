import { describe, it, expect } from 'vitest'
import { getKeyFromName, getPlural } from '../../modules/core/utils/texts'

// Jednoduchy test textovych funkcii
describe('texts utils (student test)', () => {
  it('should convert name into key-friendly format', () => {
    const input = 'My Test Name!'
    const result = getKeyFromName(input)
    expect(result).toBe('my_test_name')
  })

  it('should create plural correctly for normal word', () => {
    expect(getPlural('car')).toBe('cars')
  })

  it('should add "es" for words ending with x, h or s', () => {
    expect(getPlural('box')).toBe('boxes')
    expect(getPlural('brush')).toBe('brushes')
    expect(getPlural('class')).toBe('classes')
  })

  it('should replace y with ies for words ending in y', () => {
    expect(getPlural('city')).toBe('cities')
  })
})
