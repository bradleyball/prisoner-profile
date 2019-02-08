import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#212121",
      light: "#484848",
      dark: "#000000"

      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#ffffff",
      main: "#cfd8dc",
      // dark: will be calculated from palette.secondary.main,
      dark: "#9ea7aa"
    }
    // error: will use the default color
  }
});
