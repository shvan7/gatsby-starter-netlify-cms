import React, { useState, useEffect } from 'react'
import { StyleSheetManager } from 'styled-components'

const StyleInjector = ({ children }) => {
  const [iframeRef, setIframeRef] = useState(null)

  useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0]
    const iframeHeadElem = iframe.contentDocument.head
    setIframeRef(iframeHeadElem)
  }, [])

  return iframeRef && <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>
}

const withStyledComponents = Comp => {
  return props => (
    <StyleInjector>
      <Comp {...props} />
    </StyleInjector>
  )
}

export default withStyledComponents
