import React, { useRef, useState } from 'react'

export const SvgIco = ({ src, ...rest }) => {
  console.log(src)
  const SvgRef = useRef(null)
  const [loading, setLoading] = useState(false)

  const importSvg = async () => {
    try {
      SvgRef.current = (await import('../../static' + src)).ReactComponent
    } catch (err) {
      throw err
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    if (src) {
      setLoading(true)
      importSvg()
    }
  }, [src])

  return !loading && SvgRef.current ? <SvgRef.current {...rest} /> : <></>
}
