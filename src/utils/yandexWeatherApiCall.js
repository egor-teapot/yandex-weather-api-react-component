import axios from "axios"

export const yandexWeatherApiCall = (lat, long) => {
    const onResolve = data => data
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: 'http://localhost:5173/api/https://api.weather.yandex.ru/v2/forecast?',
            withCredentials: false,
            headers: {
                'X-Yandex-API-Key': 'a252769c-08b4-4549-a039-c6fa43ef9c7c',
            },
            data: {
                'lat': lat,
                'long': long,
                'lang': 'ru_RU',
                'extra': false,
                'hours': true,
            }
        }) // axios
            .then(data => resolve( onResolve(data)))
            .catch(err => reject(err))
    }) // promise

} // fun yandexWeatherApiCall