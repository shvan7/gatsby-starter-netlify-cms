import React from 'react'

import SvgAdobe from '../ressources/reactSvg/Adobe'

const svgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '90',
  height: '90',
}

const renderFormated = result => {
  const newArray = []

  for (let i = 0; i < result.length; i++) {
    if (result[i] === 'color') newArray.push(<span key={i + result.length}>{result[++i]}</span>)
    else if (result[i] === 'ico')
      newArray.push(<img alt="img" key={i + result.length} src={result[++i]} />)
    else if (result[i] === 'svg') newArray.push(<SvgAdobe {...svgProps} />)
    else newArray.push(result[i])
  }

  return newArray
}

export const formateText = str => {
  // regex
  const regex = /(<.+?>)(.+?)(<.+?>)/g
  const regex2 = /<(.+?)>/g
  // array result
  const result = str.split(regex).map(e => e.replace(regex2, '$1'))
  return <>{renderFormated(result)}</>
}
