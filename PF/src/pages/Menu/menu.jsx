import './menu.css';
import {Link,Outlet} from 'react-router-dom'
function Menu(){

    return(
        <>
        <nav>
        <Link to='/'>HOME </Link>
        <Link to='/evento'>EVENTOS </Link>
        <Link to='/pesquisa'>PESQUISA </Link>
       
       </nav>
      <div>
      <Outlet/>
      </div>
      </>
    )
}
export default Menu