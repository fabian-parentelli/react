import { Link } from 'react-router-dom';
import './listNav.css';

const ListNav = () => {

    return (
        <div className='listNav'>
            <p>Paginas</p>
            <ul>
                <Link className='lnk' to={'/'}>Menú</Link>
                <Link className='lnk' to={'/products/nacional'}>Nacional</Link>
                <Link className='lnk' to={'/products/uruguay'}>Uruguay</Link>
                <Link className='lnk' to={'/products/inglaterra'}>Inglaterra</Link>
                <Link className='lnk' to={'/products/eeuu'}>Estados Unidos</Link>
            </ul>
        </div>

    );
};

export default ListNav;