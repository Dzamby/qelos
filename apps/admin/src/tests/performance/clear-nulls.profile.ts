import { clearNulls } from '../../src/modules/core/utils/clear-nulls'

// vytvoríme veľký objekt so 100 000 položkami
const bigObject: Record<string, number | null> = {}
for (let i = 0; i < 100_000; i++) {
  bigObject['key' + i] = i % 3 === 0 ? null : i
}

// spustíme profilovanie
console.time('clearNulls')
clearNulls(bigObject)
console.timeEnd('clearNulls')
