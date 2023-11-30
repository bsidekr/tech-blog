export const convertKeysToCamelCase = (obj: any) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  if (obj instanceof Date) {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => convertKeysToCamelCase(item))
  }

  return Object.keys(obj).reduce((acc, key) => {
    const camelCaseKey = toCamelCase(key)
    acc[camelCaseKey] = convertKeysToCamelCase(obj[key])
    return acc
  }, {})
}

const toCamelCase = (str: string): string => {
  return str.replace(/([-_][a-z])/gi, (value) =>
    value.toUpperCase().replace('-', '').replace('_', '')
  )
}
