import { motion } from "framer-motion";
import { skills } from "../utils/skills";
import { Box, Typography, Grid, Chip, Paper } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ py: 8, px: 3, background: "linear-gradient(180deg, #f8f9fa, #ffffff)" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333" }}
        >
          About Me
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          align="center"
          maxWidth="md"
          mx="auto"
          sx={{ color: "#555", mb: 4 }}
        >
          I’m Varsine, a highly skilled frontend developer with 4+ years
          experience in React.js, Next.js, and modern UI technologies. I love
          solving tough problems, optimizing performance, and delivering clean
          user experiences.
        </Typography>

        {/* Skills Section */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 4,
            background: "rgba(255,255,255,0.9)",
            maxWidth: 900,
            mx: "auto"
          }}
        >
          <Grid container spacing={2} justifyContent="center">
            {skills.map((skill) => (
              <Grid key={skill}>
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: "0px 4px 20px rgba(0,0,0,0.15)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Chip
                    label={skill}
                    sx={{
                      cursor: "pointer",
                      fontWeight: 500,
                      px: 2,
                      py: 0.5,
                      background: "linear-gradient(45deg, #6a11cb, #2575fc)",
                      color: "#fff",
                      borderRadius: "20px",
                      "&:hover": {
                        background: "linear-gradient(45deg, #2575fc, #6a11cb)",
                      }
                    }}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default About;
