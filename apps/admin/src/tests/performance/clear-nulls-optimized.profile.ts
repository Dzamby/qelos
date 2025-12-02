function clearNullsOptimized(obj: Record<string, any>) {
  if (typeof obj !== 'object' || Array.isArray(obj)) return {}

  const newObj: Record<string, any> = {}
  for (const key in obj) {
    const val = obj[key]
    if (val !== null) {
      newObj[key] = val
    }
  }
  return newObj
}

// simulujeme veľký objekt
const bigObject: Record<string, number | null> = {}
for (let i = 0; i < 100_000; i++) {
  bigObject['key' + i] = i % 3 === 0 ? null : i
}

// profilujeme optimalizovanú verziu
console.time('clearNullsOptimized')
clearNullsOptimized(bigObject)
console.timeEnd('clearNullsOptimized')
