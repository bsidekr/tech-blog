import React from 'react'

import humanize from 'humanize-string'

const MAX_STRING_LENGTH = 150

export const formatEnum = (values: string | string[] | null | undefined) => {
  let output = ''

  if (Array.isArray(values)) {
    const humanizedValues = values.map((value) => humanize(value))
    output = humanizedValues.join(', ')
  } else if (typeof values === 'string') {
    output = humanize(values)
  }

  return output
}

export const jsonDisplay = (obj: unknown) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

export const truncate = (value: string | number) => {
  let output = value?.toString() ?? ''

  if (output.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }

  return output
}

export const jsonTruncate = (obj: unknown) => {
  return truncate(JSON.stringify(obj, null, 2))
}

export const timeTag = (dateTime?: string) => {
  let output: string | JSX.Element = ''

  if (dateTime) {
    output = (
      <time dateTime={dateTime} title={dateTime}>
        {new Date(dateTime).toUTCString()}
      </time>
    )
  }

  return output
}

export const checkboxInputTag = (checked: boolean) => {
  return <input type="checkbox" checked={checked} disabled />
}

/**
 * 서버에서 받은 데이터를 사용자 언어와 timeZone에 맞게 표시
 * @example
 * // return 2023년 1월 1일 (국문 및 Asia/Seoul 가정)
 * intlDateTimeFormat("2023-01-01T03:52:36.808Z")
 */
export const intlDateTimeFormat = (date: string | Date, option?: object) => {
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions()
  const defaultOption = { dateStyle: 'long', timeZone }
  const intlDate = new Intl.DateTimeFormat('ko-KR', option ?? defaultOption) // FIXME: locale 감지하는 hook 호출시 에러 해결 필요

  if (typeof date === 'string') return intlDate.format(Date.parse(date))
  else if (typeof date.getMonth === 'function')
    return intlDate.format(date.getTime())
}
