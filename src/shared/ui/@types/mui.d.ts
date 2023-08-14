import "@mui/material";

declare module "@mui/material" {
  interface ComponentsPropsList {}

  interface Components<Theme = unknown> {
    MuiLoadingButton?: {
      defaultProps?: unknown;
      styleOverrides?: unknown;
      variants?: unknown;
    };
    MuiDataGrid?: {
      defaultProps?: unknown;
      styleOverrides?: unknown;
      variants?: unknown;
    };
  }
}
