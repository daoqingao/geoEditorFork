import React, { useContext, useState } from 'react'
import { GlobalStoreContext } from '../../store'
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';

function PropertyCard(props) {
    const { store } = useContext(GlobalStoreContext);
   
    const {index,propertyObj,propertyMap} = props;

    function handleUserNameClick(){
        
        //store.showPublishedListsFilteredUsers(commentObj.user);
    }

    let cardClass = "comment-card";
    let cardElement = <div></div>
    
    cardElement=<Box>
        {propertyObj}: {propertyMap.get(propertyObj)}
        <Box>
        <BorderColorIcon sx={{"&:hover": {fill: "rgba(255,240,10,0.8)"}}}/> <DeleteIcon sx={{"&:hover": {fill: "rgba(255,240,10,0.8)"}}}/>
        </Box>
        
    </Box>
    // cardElement = <div
    // key={index}
    // id={'song-' + index + '-card'}
    // className={cardClass}
    
    // >
    // {index + 1}.
 
    
    // </div>
    
    return (
        cardElement
    );
}

export default PropertyCard;