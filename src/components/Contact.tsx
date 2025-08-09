import { CVSection } from "./CVSection";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import { Box, Typography, Link, Stack } from "@mui/material";

 const Contact = () => {
  return (
    <Box sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body1" gutterBottom>
        Email: varspoghosyan93@gmail.com
      </Typography>
      <CVSection />
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        <Link href="https://github.com/Varsine" target="_blank">
          <GitHub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/varsine-poghosyan-3b9990183"
          target="_blank"
        >
          <LinkedIn />
        </Link>
        <Link href="mailto:varspoghosyan93@gmail.com">
          <Email />
        </Link>
      </Stack>
    </Box>
  );
}

export default Contact;