import { signOut } from 'firebase/auth';
import NetflixLogo from '../assets/NetfilxLogo.png'
import UserLogo from '../assets/download.png'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  console.log(user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }
  return (
    <div className="trasprant flex justify-between mx-2">
        <img src={NetflixLogo} alt="headerimage" className="w-64"/>
        {user && (
          <div className='flex items-center justify-center'>
          <img src={user.photoURL} alt="userLogo" className='w-10 h-12 cursor-pointer '/>
          <button className='text-white font-bold bg-black h-12 cursor-pointer p-2' onClick={handleSignOut}>Sign Out</button>
        </div>
        )}
    </div>
  )
}

export default Header