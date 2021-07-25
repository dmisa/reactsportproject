import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const Hero = () => {
    return (
        <div>
            <div className="px-4 py-5 text-center">
                <FontAwesomeIcon className="text-light" size="4x" icon={faFutbol}/>
                <h1 className="display-5 fw-bold text-light">What Goal You should watch today?</h1>
                <div className="col-lg-6 mx-auto">
                <p className="lead mb-4 text-light">Its really random!</p>


                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link to="/watchgoal">
                        <Button className="px-4 gap-3" size="lg" variant="primary" >
                            Watch now!
                        </Button>
                    </Link>
                    <Link to="/about">
                        <Button size="lg" variant="secondary" >
                            About
                        </Button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
