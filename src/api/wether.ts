import axios from "axios";

const baseUrl = 'https://dataservice.accuweather.com'
const apikey = 'L4yZ93RCt9J4yGZgsgZGXHn1ktyJuqfC';//if it was a real app i will set this key in .env

const get = async (url:string) => {
    const headers = {
        'Access-Control-Allow-Origin':'*',
    }
    try{
        const res =  await axios.get(url);
        return res.data as any;
    }catch(e){
        console.log(e);
    }
}


export const autoCompleteSearch = async (input:string) => {
    const url = baseUrl + `/locations/v1/cities/autocomplete?apikey=${apikey}&language=en-us&q=${input}`
    const res = await get(url)
    return res
}

export const getCurrentWeather = async (key:string) => {
    const url = baseUrl + `/currentconditions/v1/${key}?apikey=${apikey}&language=en-us&details=false`
    const res = await get(url)
    return res
}

export const getFiveDaysForecast = async (key:string) => {
    const url = baseUrl + `/forecasts/v1/daily/5day/${key}?apikey=${apikey}&language=en-us&details=false&metric=false`
    const res = await get(url)
    return res
}