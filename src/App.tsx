import { CssBaseline, Box } from '@mui/material';
import { About, Hero, Projects, Contact } from './components/index';

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ bgcolor: '#f9f9f9', fontFamily: 'Roboto, sans-serif' }}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Box>
    </>
  );
}

export default App;
