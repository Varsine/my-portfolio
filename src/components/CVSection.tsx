import { Box, Button } from "@mui/material";

export const CVSection = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 2 }}>
      <Button
        variant="contained"
        color="primary"
        download={true}
        href="/Varsine_Poghosyan_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download My CV
      </Button>
    </Box>
  );
};
