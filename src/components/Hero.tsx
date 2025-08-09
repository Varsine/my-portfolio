import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';

 const Hero = () => {
  return (
    <Box sx={{ py: 10, textAlign: 'center', bgcolor: '#0D1117', color: 'white' }}>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h3">Varsine Poghosyan</Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>
          Frontend (React.js, Next.js) Developer
        </Typography>
        <Typography variant="body1" sx={{ mt: 3, maxWidth: 600, mx: 'auto' }}>
          Turning Ideas into Scalable Interfaces
        </Typography>
      </motion.div>
    </Box>
  );
}

export default Hero;