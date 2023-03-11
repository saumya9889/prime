import { extendTheme } from "@chakra-ui/react";

import "@fontsource/varela-round";

const theme = extendTheme({
  fonts: {
    avenir: "'Avenir LT 65 Medium', sans-serif",
    veralaRound: "'Varela Round', sans-serif",
    goudy: "'Goudy Old Style'",
  },
});

export default theme;
