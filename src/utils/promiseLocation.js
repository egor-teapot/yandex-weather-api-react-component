// возвращает широту, долготу и точность
export const promiseLocation = () => {
    function onResolve(data) {
        return data
    }

    // промисификация функции
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => {
            resolve( onResolve(position.coords) )
            }, // callback
            reject,
            {
                'enableHighAccuracy': true
            }
        ); // getCurrentPosition
    }); // Promise
}