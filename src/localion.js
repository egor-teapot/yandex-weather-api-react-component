export const location = () => {
    return navigator.geolocation.getCurrentPosition((data) => data)
}