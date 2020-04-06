
import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';


const ListComponent = ({ title, value }) => (
    
    <div>
            <ListItem style={{paddingBottom: 0, paddingTop: 0}}>
                <ListItemText primary={`${value}: ${title}`}/>
            </ListItem>
    </div>
);

export default ListComponent;