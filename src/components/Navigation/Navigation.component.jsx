import './Navigation.styles.css';
import Content from '../Content/Content.component';

function Navigation () {
    return(
        <nav className='nav-container'>
            <div className='title-container'>
                <h1 className="title">My Website</h1>
            </div>

            <div className='link-container'>
                <a href="#">About</a>
                <a href="#">Home</a>
                <a href="#">Services</a>
            </div>



        </nav>
        
    )
}

export default Navigation;