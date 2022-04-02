import { FC ,useState , useEffect} from 'react'
import { useSelector } from 'react-redux';
import {useLocation} from 'react-router-dom';
import AsyncSelect from 'react-select/async';
import Header from '../../components/Header/Header';
import Forecast from '../../components/Forecast/Forecast';
import {locationsList} from './../../utils/helpers'
import { Options } from '../../utils/modules';
import useDebounce from '../../customHooks/useDebounce'
import {autoCompleteSearch} from '../../api/wether'
import styles from './Home.module.css'



const Home:FC = () => {

    const params = useLocation()
    const [input,setInput] = useState<string>('')
    const [optionList,setOptionList] = useState<Array<Options>>([])
    const [selectedCity,setSelectedCity] = useState<Options>({label:'Tel-Aviv',value:'213225'})
    const isDark:boolean = useSelector((state:any)=>state.weather.darkTheme);
    const debouncedInput = useDebounce(input,400);
    
    const handleInput = async (input:string) => {
      if(input.length > 1){
        const res  = await autoCompleteSearch(debouncedInput)
        return locationsList(res);
      }
    }

    useEffect(()=>{
      if(params.state) setSelectedCity(params.state as Options)
    },[params])

    return (
    <>
        <Header current='H' />
        <div className={styles.container } style={isDark ? {background:'#344050'}: {} }>
        
        <AsyncSelect
          cacheOptions
          loadOptions={handleInput}
          defaultOptions={optionList}
          className={styles.input}
          onChange={(e)=>setSelectedCity(e as Options)}
          onInputChange={(e) => setInput(e)}
        />
        <Forecast selectedCity={selectedCity} />
        </div>
        </>
    )
}

export default Home