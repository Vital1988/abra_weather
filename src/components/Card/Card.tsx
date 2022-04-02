import {FC} from 'react'
import { useNavigate } from 'react-router-dom'
import clouds from '../../assets/icons/clouds.png'
import styles from './Card.module.css'

type CardProps = {
    favorites?:boolean,
    title:string,
    temp:any,
    discreption?:string 
    locationKey?:string
}



const Card:FC<CardProps> = ({favorites,title,discreption,temp,locationKey}) => {

    const goTo = useNavigate();
    
    return (
        <div onClick={()=> favorites? goTo('/',{state:{label:title,value:locationKey}}): ''}  className={styles.container}>
            <div className={styles.city}>{title}</div>
            <div className={styles.temp_container}>
                <img src={clouds} className={styles.temp_icon} />
                <div className={styles.temp}>{temp} &deg; c</div>
            </div>
            {favorites && <div className={styles.discreption}>{discreption}</div>}
        </div>
    )
}

export default Card
