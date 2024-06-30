import React from 'react';

const PdfDownloader = ({src,btnText,filename}) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = src; // Replace with your PDF file URL
    link.download = filename; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button onClick={handleDownload} className="btn">{btnText}</button>
    </div>
  );
};

export default PdfDownloader;