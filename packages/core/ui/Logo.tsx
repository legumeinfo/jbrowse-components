type LogoVariant = 'color' | 'black' | 'white'

interface LogoProps {
  variant?: LogoVariant
}

function getColors(variant?: LogoVariant) {
  if (variant === 'black') {
    return {
      midnight: '#808080',
      forrest: '#666666',
      grape: '#4d4d4d',
      mandarin: '#333333',
      gray: '#1a1a1a',
    }
  }
  if (variant === 'white') {
    return {
      midnight: '#ffffff',
      forrest: '#e6e6e6',
      grape: '#cccccc',
      mandarin: '#b3b3b3',
      gray: '#999999',
    }
  }
  return {
    midnight: '#0d233f',
    forrest: '#135560',
    grape: '#721e63',
    mandarin: '#ffb11d',
    gray: '#dadada',
  }
}

export function Logomark({ variant }: LogoProps) {
  return (
    <svg viewBox="0 0 175 175">
      <Icon variant={variant} />
    </svg>
  )
}

export function LogoFull({ variant }: LogoProps) {
  return (
    <svg viewBox="0 0 641 175">
      <Text variant={variant} />
      <Icon variant={variant} />
    </svg>
  )
}

function Icon({ variant }: LogoProps) {
  const colors = getColors(variant)
  return (
    <>
      <path
        style={{ fill: colors.midnight }}
        d="M120.5,57.5c.168,0,.333.012.5.013V40.506c-.167,0-.333-.006-.5-.006a98.325,98.325,0,0,0-77.4,37.565q-2.664,3.378-5.023,6.994l14.206,9.327Q54.043,91.709,56,89.179A81.363,81.363,0,0,1,120.5,57.5Z"
      />
      <path
        style={{ fill: colors.forrest }}
        d="M148.668,86.223c.308.133.6.283.908.42l6.746-15.618c-.153-.067-.3-.143-.454-.21a81.36,81.36,0,0,0-71.777,3.5q-2.8,1.544-5.469,3.309l9.249,14.054A63.93,63.93,0,0,1,148.668,86.223Z"
      />
      <path
        style={{ fill: colors.grape }}
        d="M170.894,109.37A63.929,63.929,0,0,0,113.4,88.861l2.336,15.474a48.456,48.456,0,0,1,44.322,15.42c.111.125.214.255.324.381l11.16-10C171.323,109.879,171.118,109.62,170.894,109.37Z"
      />
      <path
        style={{ fill: colors.mandarin }}
        d="M150.921,150.314c.04.163.07.326.107.489l16.509-4.058c-.039-.163-.067-.326-.107-.489A48.457,48.457,0,0,0,135.575,111.8l-5.515,15.591A32.466,32.466,0,0,1,150.921,150.314Z"
      />
      <path
        style={{ fill: colors.gray }}
        d="M134.1,138.129l-9.779,13.213a32.486,32.486,0,0,1,7.823,14.463l15.147.852c.012-.166.032-.331.041-.5A32.464,32.464,0,0,0,134.1,138.129Z"
      />
    </>
  )
}

function Text({ variant }: LogoProps) {
  const colors = getColors(variant)
  return (
    <g
      aria-label="JBrowse"
      transform="translate(213.084 144.241)"
      style={{ fill: colors.midnight }}
    >
      <path d="m 26.355,-71.505 v 54.075 2.835 q 0,6.825 -0.42,10.185 -0.735,5.67 -2.835,9.135 -3.255,5.355 -8.505,8.4 -4.83,2.73 -11.55,3.57 L 1.47,11.76 Q 7.35,10.185 9.24,4.2 10.605,-0.105 10.605,-9.975 v -5.565 -55.965 q 1.785,0 4.62,0.315 2.835,0.21 3.255,0.21 1.785,0 2.94,-0.105 4.515,-0.42 4.935,-0.42 z" />
      <path d="m 60.68836,-65.415 v 24.78 h 3.255 q 2.94,0 4.935,-0.525 2.1,-0.525 3.885,-2.1 2.31,-1.995 3.36,-4.83 1.155,-2.835 1.155,-6.09 0,-5.565 -2.94,-8.61 -2.94,-3.045 -8.295,-3.045 -2.52,0 -5.355,0.42 z m 0,30.87 V -6.09 h 5.25 q 4.725,0 8.505,-3.675 3.885,-3.78 3.885,-10.08 0,-8.19 -4.62,-11.655 -4.095,-3.045 -13.02,-3.045 z M 44.93836,0 v -71.505 h 27.09 q 9.135,0 14.385,3.255 6.51,3.99 6.51,12.6 0,7.035 -5.25,11.655 -4.62,4.095 -11.97,5.145 v 0.945 q 7.56,0.735 12.285,3.99 6.615,4.62 6.615,13.335 0,10.185 -7.98,15.75 -6.93,4.83 -17.43,4.83 z" />
      <path d="M 109.44281,0.525 V -50.4 q 1.785,0.21 3.99,0.42 2.31,0.105 3.255,0.105 2.31,0 4.2,-0.21 1.89,-0.21 3.045,-0.315 v 13.02 q 1.89,-6.51 5.46,-9.87 4.41,-4.095 11.655,-4.095 -0.315,2.73 -0.42,6.825 -0.105,3.99 -0.105,7.455 l -0.945,0.84 q -0.945,-0.735 -2.415,-1.05 -1.47,-0.315 -2.94,-0.315 -3.57,0 -6.195,1.89 -2.52,1.785 -3.465,5.04 -0.42,1.155 -0.525,3.15 -0.105,1.89 -0.105,4.515 v 4.515 19.005 q -1.785,-0.21 -2.625,-0.21 -3.675,-0.315 -4.62,-0.315 -2.31,0 -4.2,0.21 -1.89,0.21 -3.045,0.315 z" />
      <path d="m 173.77337,1.47 q -11.655,0 -18.585,-6.825 -6.93,-6.825 -6.93,-18.48 0,-12.6 6.72,-20.055 6.825,-7.455 18.9,-7.455 11.97,0 18.9,6.72 6.93,6.72 6.93,18.48 0,12.285 -6.72,19.74 -7.14,7.875 -19.215,7.875 z m 0.735,-48.09 q -5.88,0 -8.505,6.51 -2.205,5.565 -2.205,15.96 0,8.19 1.47,12.915 2.415,7.98 8.505,7.98 5.565,0 8.19,-7.875 2.205,-6.51 2.205,-16.695 0,-8.505 -2.1,-13.23 -2.52,-5.565 -7.56,-5.565 z" />
      <path d="m 222.03563,-50.4 10.5,36.015 q 3.675,-11.235 5.67,-17.85 2.415,-8.085 5.04,-18.165 1.05,0.105 3.045,0.315 2.1,0.21 2.835,0.21 1.995,0 3.15,-0.105 1.26,-0.21 2.73,-0.42 l 10.71,36.015 q 5.88,-17.43 10.71,-36.015 l 4.2,0.315 4.095,-0.315 q -5.145,13.125 -9.135,24.57 -5.04,14.28 -8.505,26.355 -1.89,-0.21 -3.36,-0.42 -1.365,-0.105 -2.205,-0.105 -1.89,0 -3.36,0.21 -1.365,0.21 -2.31,0.315 l -10.605,-34.755 q -4.41,13.65 -6.72,21.105 -2.31,7.35 -4.095,13.65 -1.89,-0.21 -3.36,-0.42 -1.365,-0.105 -2.31,-0.105 -1.995,0 -3.465,0.21 -1.365,0.21 -2.31,0.315 -3.78,-12.81 -5.04,-17.01 -2.205,-7.245 -5.46,-17.01 -2.835,-8.4 -5.88,-16.905 1.575,0 4.305,0.315 2.73,0.21 3.36,0.21 1.47,0 4.305,-0.21 2.835,-0.315 3.465,-0.315 z" />
      <path d="m 292.84172,-12.81 h 2.625 q 1.47,4.095 4.62,6.51 3.15,2.415 7.35,2.415 2.94,0 5.46,-1.785 2.625,-1.89 2.625,-4.62 0,-3.885 -6.195,-6.615 -10.395,-4.62 -11.655,-5.46 -6.405,-4.515 -6.405,-12.285 0,-7.77 5.25,-12.18 5.25,-4.515 12.81,-4.515 3.99,0 8.085,1.365 4.095,1.26 7.14,3.57 l -2.52,9.24 h -2.94 q -0.63,-3.57 -3.57,-6.195 -2.835,-2.625 -6.405,-2.625 -3.15,0 -5.46,1.575 -2.31,1.47 -2.31,4.515 0,3.885 6.405,6.51 10.185,4.095 11.865,5.25 6.405,4.41 6.405,12.81 0,7.455 -5.46,12.18 -5.355,4.62 -14.805,4.62 -8.19,0 -14.49,-4.305 z" />
      <path d="m 349.61228,-29.925 h 15.54 q 0,-6.51 -1.05,-10.395 -1.68,-6.3 -5.88,-6.3 -5.04,0 -7.14,6.195 -1.47,4.305 -1.47,10.5 z m 30.03,5.04 h -30.03 q 0,9.135 3.045,13.86 3.57,5.67 11.55,5.67 3.255,0 6.405,-1.26 3.15,-1.26 5.88,-3.465 l 1.26,0.945 -2.31,5.88 q -6.72,4.725 -15.015,4.725 -12.915,0 -19.635,-7.245 -6.72,-7.245 -6.72,-20.37 0,-11.235 6.405,-18.165 6.51,-7.035 17.64,-7.035 11.655,0 16.905,7.56 4.62,6.615 4.62,18.9 z" />
    </g>
  )
}
