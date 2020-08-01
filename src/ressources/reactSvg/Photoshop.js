import * as React from 'react'

function SvgPhotoshop(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M0 0v512h512V0H0zm482 482H30V30h452v452z" />
      <path d="M213.102 181.6h-72.24V352h33.12v-57.12h40.32c29.531 0 53.04-25.713 53.04-56.64 0-26.24-21.176-56.64-54.24-56.64zm-.72 84.24h-38.4v-55.2h36.96c14.057 0 22.8 13.2 22.8 27.6 0 16.76-9.742 27.6-21.36 27.6zM336.939 276.64c-4.642-1.118-24.72-4.39-24.72-15.84 0-9.175 7.531-14.16 19.2-14.16 15.831 0 30.079 9.12 36.48 13.92l12.96-19.44c-6.881-6.079-21.609-17.28-49.2-17.28-26.284 0-49.44 14.91-49.44 41.52 0 27.64 36.72 32.801 44.88 35.04 9.757 2.723 27.6 6.225 27.6 17.04 0 8.81-8.449 13.92-20.64 13.92-18.809 0-36.48-11.119-44.16-16.56l-12 20.16c7.2 6.24 27.851 19.44 56.88 19.44 15.679 0 50.88-4.9 50.88-39.84 0-29.56-40.08-35.678-48.72-37.92z" />
    </svg>
  )
}

export default SvgPhotoshop
