import { DefaultSVGProps } from './types/DefaultSVGProps'

type YouTubeLogoSVGProps = DefaultSVGProps

export const YouTubeLogoSVG = ({ ...props }: YouTubeLogoSVGProps) => {
  return (
    <svg
      {...props}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 192 192"
      enableBackground="new 0 0 192 192"
      xmlSpace="preserve"
    >
      <g id="XMLID_184_">
        <path
          id="XMLID_182_"
          fill="#FF0000"
          d="M180.32,53.36c-2.02-7.62-7.99-13.62-15.56-15.66C151.04,34,96,34,96,34
     s-55.04,0-68.76,3.7c-7.57,2.04-13.54,8.04-15.56,15.66C8,67.18,8,96,8,96s0,28.82,3.68,42.64c2.02,7.62,7.99,13.62,15.56,15.66
     C40.96,158,96,158,96,158s55.04,0,68.76-3.7c7.57-2.04,13.54-8.04,15.56-15.66C184,124.82,184,96,184,96S184,67.18,180.32,53.36z"
        />
        <polygon id="XMLID_1355_" fill="#FFFFFF" points="78,122.17 124,96 78,69.83 	" />
      </g>
    </svg>
  )
}
