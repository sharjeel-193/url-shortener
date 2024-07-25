import './App.css';
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { Box, Typography, useTheme } from '@mui/material'
import { LinkForm } from './components'
import { loadSlim } from "tsparticles-slim";
import particleOptions from './utils/particleOptions';

function App() {
    const theme = useTheme()


    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);



    return (
        <div>
            <Box display={'flex'} flexDirection={'column'} width={'100%'} height={'100vh'}>
                <Particles id="tsparticles" options={particleOptions} init={particlesInit} style={{zIndex: -1}} />
                <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} paddingY={2} gap={2} zIndex={10}>
                    <Box 
                        component="img"
                        src='./logo.svg'
                        width={64}
                    />
                    <Typography fontFamily={'PT Serif'} fontWeight={800} fontSize={32}>QuickLink</Typography>
                </Box>
                <Box flex={1} width={'100%'} textAlign={'center'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} zIndex={10}>
                    <Box width={'90%'} maxWidth={'600px'} padding={2}>
                        <Typography variant='h2' fontFamily={'PT Serif'} fontWeight={800} lineHeight={1} >Shrink your Links, <br /> Expand your Reach</Typography>
                        <Typography variant='body1' my={4} >Quickly shorten and share URLs with Quick Link — your go-to tool for streamlined and shareable links</Typography>
                        <LinkForm />
                    </Box>
                </Box>
                <Box width={'100%'} bgcolor={theme.palette.primary.main} padding={1} textAlign={'center'} zIndex={10} color={'white'}>
                    QuickLink 2024 | Made with &hearts; by M. Sharjeel Maqsood
                </Box>
            </Box>
        </div>
    );
}


  

export default App;
