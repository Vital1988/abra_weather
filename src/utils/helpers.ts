
export const locationsList = (locations:Array<any>) => {
    return locations.map((location) =>  {
        return {value:location.Key,label:location.LocalizedName + ':' + location.Country.LocalizedName} 
    })
}

export const getDay = (date:string) => {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date(date);
    return weekday[d.getDay()]
}

export const removeByKey = (arr:Array<any>,id:string) => {
    return arr.filter(item => item.id !== id)
}

export const includes = (arr:Array<any>,id:string) => {
    const condition = (item:any) => item.id == id;
    return arr.some(condition)
}

export const temperatureFormat = (temp:number) => {
    return Math.round((temp - 32) * (5/9));
}
