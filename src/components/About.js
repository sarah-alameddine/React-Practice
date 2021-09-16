import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4> hellloo KUSH DADDY  </h4>
            {/**
             * USE LINKS INSTEAD OF A TAGS SO THE WHOLE PAGE DOESNT HAVE TO RELOAD
             *  <a href='/'> Go Back</a> */}
            <Link to='/'> Go Back</Link>
        </div>
    )

}

export default About;