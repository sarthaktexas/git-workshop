import { merge } from 'theme-ui'

const theme = merge.all(
  base,
  // highlight,
  {
    useColorSchemeMediaQuery: false,
    fonts: base.fonts,
    styles: {
      Slide: {
        fontSize: [3, 4],
      },
      img: {
        objectFit: 'contain'
      },
      h1: {
        fontSize: [5, 6]
      },
      pre: {
        textAlign: 'left',
        fontSize: 'inherit'
      },
      code: {
        bg: 'sunken',
        px: 1,
        borderRadius: 'default',
        color: 'purple'
      },
      Prism: {
        pre: props => props.children,
        code: Prism,
      },
      p: {
        maxWidth: 980,
        mx: 'auto',
        px: 3,
      },
      li: {
        maxWidth: 980,
        mx: 'auto',
        px: 3,
      }
    },
    images: {
        fifty: {
          width: 100,
        },
      }
  }
)

import Prism from '@theme-ui/prism'
export default {
  pre: props => props.children,
  code: Prism,
}

export default theme