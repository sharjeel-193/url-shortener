// src/LinkForm.js

import React, { useState, useEffect } from 'react';
import { Box, Grid, TextField, Button, MenuItem, Select, InputLabel, FormControl, InputAdornment, useTheme, Typography, IconButton, Alert } from '@mui/material';
import {Link as LinkIcon, Language as LanguageIcon, ContentCopy as ContentCopyIcon} from '@mui/icons-material';
import { GradientCircularLoader } from '../../components';

function LinkForm() {

    const [domain, setDomain] = useState('');
    const [url, setUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState(null);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const theme = useTheme()

    const handleDomainChange = (event) => {
        setDomain(event.target.value);
    };

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(null), 2000);
            return () => clearTimeout(timer); // Cleanup the timeout if the component is unmounted
        }
        if(message) {
            const timer = setTimeout(() => setMessage(null), 2000);
            return () => clearTimeout(timer);
        }
    }, [error, message]);

    const copyToClipboard = () => {
        if (shortenedUrl) {
            navigator.clipboard.writeText(shortenedUrl)
                .then(() => {
                    setMessage('URL copied to clipboard!');
                    setTimeout(() => setError(null), 2000); // Clear message after 2 seconds
                })
                .catch((err) => {
                    setError(`Failed to copy URL: ${err.message}`);
                    setTimeout(() => setError(null), 2000); // Clear message after 2 seconds
                });
        }
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        setLoading(true)
        setShortenedUrl(null)
        if(!url || !domain) {
            setError('You need to enter the URL and select the domain');
            setLoading(false)
            return;
        }
        if(domain === 'shortiny'){
            handleGenerateShortinyLink();
            // fetchShortenedLinks();
            return;
        }
        if(domain === 'tinyURL'){
            handleGenerateTinyUrlLink();
            return;
        }
        if(domain === 'shortIO'){
            handleGenerateShortIOLink();
            return;
        }
        if(domain === 'spoo'){
            handleGenerateSpooLink();
            return;
        }
    }

    const handleGenerateTinyUrlLink = async () => {
        try {
            const response = await fetch('https://api.tinyurl.com/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.REACT_APP_TINYURL_KEY}`
                },
                body: JSON.stringify({
                    url: url,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setShortenedUrl(data.data.tiny_url); // Assuming the API returns this field
            } else {
                setError(`Error: ${data.message || 'Unable to shorten the URL'}`);
            }
        } catch (error) {
            setError(`Error: ${error.message || 'An unexpected error occurred'}`);
        } finally {
            setLoading(false);
        }
    };

    const handleGenerateShortinyLink = async () => {
        try {
            const formData = new URLSearchParams();
            formData.append('url', url);
            formData.append('domain_id', 4);
    
            const response = await fetch('https://shortiny.com/api/v1/links', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${process.env.REACT_APP_SHORTINY_KEY}`
                },
                body: formData.toString(),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                setShortenedUrl(data.data.short_url);
            } else {
                setError(`Error: ${data.message || 'Unable to shorten the URL'}`);
            }
        } catch (error) {
            setError(`Error: ${error.message || 'An unexpected error occurred'}`);
        } finally {
            setLoading(false);
        }
    };
    
    const handleGenerateShortIOLink = async () => {
        try {
            const response = await fetch('https://api.short.io/links/public', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': process.env.REACT_APP_SHORTIO_KEY
                },
                body: JSON.stringify({
                    originalURL: url,
                    domain: 'g33d.short.gy'
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setShortenedUrl(data.shortURL); 
            } else {
                setError(`Error: ${data.message || 'Unable to shorten the URL'}`);
            }
        } catch (error) {
            setError(`Error: ${error.message || 'An unexpected error occurred'}`);
        } finally {
            setLoading(false);
        }
    };

    const handleGenerateSpooLink = async () => {
        try {
            const formData = new URLSearchParams();
            formData.append('url', url);
            const response = await fetch('https://spoo.me/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json',
                },
                body: formData.toString(),
            });

            const data = await response.json();

            if (response.ok) {
                setShortenedUrl(data.short_url); 
            } else {
                setError(`Error: ${data.message || 'Unable to shorten the URL'}`);
            }
        } catch (error) {
            setError(`Error: ${error.message || 'An unexpected error occurred'}`);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <Box>
            <form onSubmit={handleSubmitForm}>
                <Grid 
                    container 
                    spacing={2} 
                    // direction={{ xs: 'column', md: 'row' }} 
                    alignItems="center"
                    justifyContent={'flex-end'}
                >
                    <Grid item xs={12}>
                        <TextField 
                            fullWidth 
                            label="Your URL" 
                            variant="outlined"
                            placeholder='Paste your Link Here'
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LinkIcon />
                                    </InputAdornment>
                                ),
                                style: { borderRadius: 30, height: 56, backgroundColor: 'white' }
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel id="domain-select-label">Select Domain</InputLabel>
                            <Select
                                fullWidth
                                label='Select Domain'
                                labelId="domain-select-label"
                                id="domain-select"
                                displayEmpty
                                value={domain}
                                onChange={handleDomainChange}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <LanguageIcon />
                                    </InputAdornment>
                                }
                                style={{ borderRadius: 30, height: 56, backgroundColor: 'white' }}
                            >
                                <MenuItem value="shortiny">Shortiny</MenuItem>
                                <MenuItem value="tinyURL">Tiny URL</MenuItem>
                                <MenuItem value="shortIO">Short IO</MenuItem>
                                <MenuItem value="spoo">Spoo.me</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Button
                            type='submit'
                            variant="contained" 
                            color="primary" 
                            fullWidth
                            sx={{
                                height: 56,
                                borderRadius: 30,
                                textTransform: 'full-size-kana'
                            }}
                        >
                            Generate Link
                        </Button>
                    </Grid>
                </Grid>
            </form>
           <Box>
                {error && <Box mt={2}>
                    <Alert severity='error'>{error}</Alert>
                </Box>}
                {loading && <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'} padding={2}>
                    <GradientCircularLoader />
                    <Typography ml={2}>
                        Generating Link ...
                    </Typography>
                </Box>}
                {shortenedUrl && <Box 
                    borderRadius={5} bgcolor={theme.palette.primary.light} padding={2} mt={2}
                >
                    <Typography variant='body2' fontWeight={600}>
                        Your Shortened Link is valid for 7 days only
                    </Typography>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography>{shortenedUrl}</Typography>
                        <IconButton onClick={copyToClipboard}>
                            <ContentCopyIcon />
                        </IconButton>
                    </Box>

                </Box>}
                {message && <Box mt={2} position={'absolute'} bottom={50} right={10}>
                    <Alert severity='success'>{message}</Alert>
                </Box>}
           </Box>
        </Box>
    );
}

export default LinkForm;
