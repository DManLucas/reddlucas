// 1. Import `extendTheme`
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/700.css'
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: '#ff3c00'
    },
  },
  font:{
    body: "Open Sans, san-serif",
  },
  styles: {
    global: () => ({
        body: {
            bg: "gray.200",
        },
    })
  },
  components: {
    
  }
})
