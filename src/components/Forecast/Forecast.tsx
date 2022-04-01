import {FC,useState,useEffect} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {getCurrentWeather,getFiveDaysForecast} from './../../api/wether'
import Card from '../Card/Card';
import heart from '../../assets/icons/heart.png'
import blackHeart from '../../assets/icons/heart_black.png'
import {currentW,forcast} from './../../fake'
import { Options } from '../../utils/modules'
import { getDay , temperatureFormat} from '../../utils/helpers';
import { addToFavorites , removeFromFavorites } from '../../redux/actions/weather';
import sun from '../../assets/icons/sun.png'
import styles from './Forecast.module.css';



type ForecastProps = {
    selectedCity:Options;
}

const Forecast:FC<ForecastProps> = ({selectedCity}) => {

    const [curWeather,setCurWeather] = useState<any>(currentW[0]);
    const [curForecast,setCurForecast] = useState<any>(forcast)
    const favoritesList:Array<any> = useSelector((state:any)=>state.weather.favorites);
    const isFavorites = favoritesList.some((fav) => fav.id === selectedCity.value)
    const btnText = isFavorites ? 'Remove From Favorites' : 'Add To Favorites'
    const dispatch = useDispatch()

    const getData = async () => {
        try{
            const [current,forecast] =  await Promise.all([
                getCurrentWeather(selectedCity.value),
                getFiveDaysForecast(selectedCity.value)]);
            setCurWeather(current[0]);
            setCurForecast(forecast)
        }catch(e){
            toast.error('Server Error', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }

    const favoritesObj = () => {
        return {
            city:selectedCity.label,
            id:selectedCity.value,
            temp:curWeather?.Temperature?.Metric?.Value,
            discreption:curWeather?.WeatherText
        }
    }

    const onClickHandler = () => {
        if(isFavorites){
            dispatch(removeFromFavorites(selectedCity.value))
        }else{
            dispatch(addToFavorites(favoritesObj()))
        }
    }

    useEffect(()=>{
         getData();
    },[selectedCity])
    
    return (
        <div className={styles.container}>
            <div className={styles.top}>

                <div className={styles.left}>
                <img src={sun} />
                <div className={styles.dits}>
                    <div>{selectedCity?.label}</div>
                    <div>{curWeather?.Temperature?.Metric?.Value} &deg; c</div>
                </div>
                </div>

                <div className={styles.right}>
                    <img src={isFavorites ? heart : blackHeart} className={styles.icon} />
                    <div onClick={()=> onClickHandler()} className={styles.btn}>{btnText}</div>
                </div>
            </div>
            <div  className={styles.text}>{curForecast?.Headline?.Text}</div>
            <div className={styles.forecast}>
                {curForecast?.DailyForecasts?.map((item:any,index:number)=> 
                    <Card 
                    key={index + 'card'}
                    title={getDay(item.Date)}
                    temp={`${temperatureFormat(item?.Temperature?.Minimum?.Value)} / ${temperatureFormat(item?.Temperature?.Maximum?.Value)}`} />)}
            </div>
            <ToastContainer />
        </div>
    )
}

export default Forecast
