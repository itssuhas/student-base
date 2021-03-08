import React from 'react';

function Loading() {
    return (
<div className="loading">
  <div className="spinner-border text-primary" role="status" style={{width : "150px",height : "150px"}}>
    <span className="sr-only">Loading...</span>
  </div>
</div>

    );
};

export default Loading;
