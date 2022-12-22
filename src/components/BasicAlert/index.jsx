import { Alert, Stack } from "@mui/material";
import { useState } from "react";

export function BasicAlert({ style, severity, message, show }) {
  const [open, setOpen] = useState(true);

  return (
    <Stack sx={{ width: "100%" }}>
      <Alert onClose={() => show(false)} severity={severity}>
        {message}
      </Alert>
    </Stack>
  );
}
