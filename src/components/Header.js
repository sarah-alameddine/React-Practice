// import React from "react";
import Button from './Button.js';
import {useLocation} from 'react-router-dom'

const Header = (props) => {
const {title, onAdd,showAdd} = props;
// Allows you to tell the component what router is should be displayed on 
const location = useLocation()
    return (
        // className allow you to refer to the css attributes
        //This class = header refers to the index.css
        <header className='header'>
            <h1>  {title} </h1>
            {/*Show add changes the text to display add or closed dependeing if its been toggled *
              - && refers to if true  */}
            {location.pathname === '/' && (
            <Button color ={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
            )}
        </header>
    );

};
// If a title is not given when header is called in another class 
// then this default is given
Header.defaultProps = {
    title: 'Task Trackers',
};

/** 
* ------------ SYLING -----------
* Styling can also be done in a class 
* To call this put it in a tag:
*    <h1 style= {headingStyling}> 
* Inline syling you need double curly brackets{{}}
*/

// const headingStyling =  {
//     color: 'black',
//     backgroundColor: 'red',
// }
export default Header;