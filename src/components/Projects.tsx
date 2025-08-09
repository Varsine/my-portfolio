import Slider from "react-slick";
import { motion } from "framer-motion";
import { projects } from "../utils/projectsList";
import {
  Box,
  Typography,
  Card,
  Grid,
  CardContent,
  Button,
} from "@mui/material";

const Projects = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box sx={{ py: 8, px: 3, bgcolor: "#f0f2f5" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={6} justifyContent="center">
        {projects.map((proj, index) => (
          <Grid key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: 4,
                p: 2,
              }}
            >
              {/* Left: Image Slider with slide-in from left */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                style={{ width: "100%", maxWidth: "50%" }}
              >
                <Slider {...sliderSettings}>
                  {proj.images.map((img, imgIndex) => (
                    <Box key={imgIndex}>
                      <img
                        src={img}
                        alt={`${proj.title} screenshot ${imgIndex + 1}`}
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    </Box>
                  ))}
                </Slider>
              </motion.div>

              {/* Right: Description with slide-in from right */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                style={{ width: "100%", maxWidth: "50%" }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {proj.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {proj.description}
                  </Typography>
                  <Box>
                    {proj.github && (
                      <Button size="small" href={proj.github} target="_blank">
                        GitHub
                      </Button>
                    )}
                    {proj.live && (
                      <Button size="small" href={proj.live} target="_blank">
                        Live Demo
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </motion.div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
