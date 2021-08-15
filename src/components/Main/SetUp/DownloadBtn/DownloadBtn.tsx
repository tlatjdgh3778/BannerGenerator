import React from "react";
import Button from "@material-ui/core/Button";

const DownloadBtn = () => {
    console.log("Downloadtn Render");

    const download = () => {
        const canvas = document.getElementById("canvasBanner") as HTMLCanvasElement; // HTMLCanvasElement 로 지정해줌으로써 toDataURL 사용가능

        if (!canvas) {
            return;
        }
        const url = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = "my_banner.png";
        link.href = url;
        link.click();
    };

    return (
        <Button onClick={download} variant="contained">
            Download
        </Button>
    );
};

export default DownloadBtn;
