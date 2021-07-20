import React from 'react';
import Button from '@material-ui/core/Button';

const DownloadBtn = () => {
    const download = () => {
        const canvas = document.getElementById('canvasBanner');
        const url = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.download = 'my_banner.png';
        link.href = url;
        link.click();
    }
    
    return(
        <Button onClick={download} variant="contained">
            Download
        </Button>
    );
}

export default DownloadBtn;