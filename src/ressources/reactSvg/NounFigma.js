import * as React from 'react'

function SvgNounFigma(props) {
  return (
    <svg viewBox="0 0 24 46.25" {...props}>
      <g fill="#000" fillRule="evenodd">
        <path d="M6.585 11.293c-3.052 0-5.549-2.497-5.549-5.549 0-3.05 2.497-5.548 5.55-5.548h11.052c3.051 0 5.548 2.497 5.548 5.548 0 3.052-2.497 5.55-5.548 5.55H6.585zM6.438 23.996h5.65v-11.1h-5.65a5.532 5.532 0 00-3.917 1.63 5.537 5.537 0 00-1.63 3.923c0 3.05 2.496 5.547 5.547 5.547M18.176 13.01a5.55 5.55 0 100 11.098 5.55 5.55 0 000-11.099M12.078 25.578H6.33v.012a5.543 5.543 0 00-5.338 5.538 5.545 5.545 0 0011.083.282h.003v-.064c.003-.073.01-.145.01-.218 0-.075-.007-.146-.01-.22v-5.33z" />
      </g>
      <text
        y={52}
        fontSize={5}
        fontWeight="bold"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >
        {'Created by Anton Barbarov'}
      </text>
      <text
        y={57}
        fontSize={5}
        fontWeight="bold"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >
        {'from the Noun Project'}
      </text>
    </svg>
  )
}

export default SvgNounFigma
