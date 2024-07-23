import {Navigate} from 'react-router-dom';
function Logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('address');
    localStorage.removeItem('city');
    localStorage.removeItem('gender');
    localStorage.removeItem('role');
    localStorage.removeItem('info');
    return(
        <>
        <Navigate to='/login'/>
        </>
    );
}
export default Logout;