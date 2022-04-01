import {FC} from 'react'
import { useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card'
import styles from './Favorites.module.css'

const Favorites:FC = () => {

    const favoritesList:Array<any> = useSelector((state:any)=>state.weather.favorites)
    const isDark:boolean = useSelector((state:any)=>state.weather.darkTheme);
    
    return (
        <div className={styles.container} style={isDark ? {background:'#344050'}: {} }>
            <Header current='F' />
            <div className={styles.content} style={isDark ? {background:'#344050'}: {} }>
                {favoritesList.length > 0 ?
                    <div className={styles.box}>
                        {favoritesList?.map((item,index)=>{
                            return <Card key={index}
                                         title={item.city.split(':')[0]}
                                         discreption={item.discreption}
                                         temp={item.temp}
                                         favorites
                                         locationKey={item.id} />
                        })}
                    </div>
                :
                <div className={styles.noFavorites}>No Favorites Locations Yet</div>}
            </div>
        </div>
    )
}

export default Favorites
