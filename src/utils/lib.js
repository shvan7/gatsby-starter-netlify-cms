import React from 'react'
import remark from 'remark'
import remarkHTML from 'remark-html'

const renderFormated = (result, type) => {
  const newArray = []
  let str = ''

  for (let i = 0; i < result.length; i++)
    if (result[i] === '<color>') {
      type === 'html'
        ? (str += `<span key=${i + result.length}>${result[++i]}</span>`)
        : newArray.push(<span key={i + result.length}>{result[++i]}</span>)
      i++
    } else type === 'html' ? (str += result[i]) : newArray.push(result[i])

  return type === 'html' ? str : newArray
}

export const formateText = (str, type) => {
  if (!str) return <></>
  // regex
  const regex = /(<color>)(.+?)(<color>)/g
  // array result
  const result = str.split(regex)
  const resultFiltered = result.filter(e => e !== '')
  return <>{renderFormated(resultFiltered, type)}</>
}

export const convertMarkdownToHtml = markdown => {
  const html = remark().use(remarkHTML).processSync(markdown).toString()
  return formateText(html, 'html')
}
