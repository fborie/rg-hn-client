import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Body.css';

const Body = (props) => {
    return(
        <div className="body">
            { props.children }
        </div>
    );
}

export default Body;