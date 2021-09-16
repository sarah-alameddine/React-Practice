const Button = (props) => {
    const {color, text,onClick} = props;
    // Create a function that tells the onClick what happens
    
    return (
     <buttton onClick={onClick}
     style = {{backgroundColor:color}} 
     className = 'btn' >
         {text}
     </buttton>
    )


};

Button.defaultProps = {
    color: 'steelblue'
}
export default Button;