import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = props => {
    handleBackClick = () => {
        props.history.goBack();
    }

    // if we pass in a folders prop, we display the folder name, else just a go back button 
    let content = props.folders ? (
        props.folders.map(folder => {
            return <li key={folder.id}><Link to={`/folder/${folder.id}`}>{folder.name}</Link></li>
        })
    ) : (<li onClick={handleBackClick}>Go Back</li>);

    return (
        <ul>
            {content}
        </ul>
    );
}

export default Sidebar;