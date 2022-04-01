import {FC} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { updatTheme } from '../../redux/actions/weather';
import { useNavigate } from 'react-router-dom';
import styles from  './Header.module.css';

type HeaderProps ={ 
    current:string
}
const Header:FC<HeaderProps> = ({current}) => {

    const goTo = useNavigate();
    const dispatch = useDispatch()

    const isDark:boolean = useSelector((state:any)=>state.weather.darkTheme);
    const themeBtnLabel = isDark ? 'Regular Theme' : 'Dark Theme'
    
    return (
        <div className={styles.container} style={isDark ? {color:'#344050'}: {}}>
            <div className={styles.title}>Herolo Weather Task</div>
            <div className={styles.btnsContainer}>
                <div onClick={()=>dispatch(updatTheme())}  className={styles.btn}>{themeBtnLabel}</div>
                <div onClick={()=>goTo('/')}  className={current == 'H' ? styles.selectedBtn : styles.btn} style={isDark && current == 'H' ? {background:'#344050'}: {}}>Home</div>
                <div onClick={()=>goTo('/Favorites')} className={current == 'F' ? styles.selectedBtn : styles.btn} style={isDark &&  current == 'F' ? {background:'#344050'}: {}}>Favorites</div>
            </div>
        </div>
    )
}

export default Header
