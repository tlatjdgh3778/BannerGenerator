import React from 'react';
import styled from 'styled-components';

const download = () => {
    const canvas = document.getElementById('canvasBanner');
    const url = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.download = 'my_banner.png';
    link.href = url;
    link.click();
}
const DownloadBtn = () => {
    return(
        <button onClick={download}>download</button>
    );
}

export default DownloadBtn;