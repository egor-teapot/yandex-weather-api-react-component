import { useState } from "react"

export const WeatherCardModal = (props) => {

    const forecastCard = props.forecasts.map((e, i) => i<3 ? <ForecastCard id={i} payload={e}/> : null)

    return (
        <>

            <div className="absolute w-[700px] h-[400px] ">
                <div className="max-h-[400px] relative flex align-center justify-center p-12 bg-gray-100 shadow-lg" >
                    <button className="rounded-md text-3xl absolute top-2 right-2 bg-gray-200 w-9 h-9 rounded-sm
                    hover:shadow-lg transition-all duration-300"
                        onClick={() => props.callback(false)}
                    >
                        x
                    </button>

                    <div className="overflow-y-scroll flex space-x-7">

 
                        {
                            forecastCard   
                        }

                    </div>
                </div>
            </div>

        </>
    )
}


export const WeatherCard = (props) => {
    const [modalState, setModalState] = useState(false)
    const { refreshable=false } = props

    return (
        <>
            {/*  */}
            <div className='relative rounded-lg shadow-lg bg-gray-100 min-w-[400px] max-h-[200px] px-6 py-12 overflow-hidden shrink-0'>

                {/* добавить фитбек по нажатию на кнопку */}
                {
                    refreshable? 
                        (
                            <button className="rounded-md text-3xl absolute top-2 right-2 bg-gray-200 w-9 h-9 rounded-sm
                            hover:shadow-lg transition-all duration-300">
                            ↻
                            </button>
                        )
                        : null
                } 

                <h1 className='text-2xl mb-7 hover:text-sky-500 transition-all'
                    onClick={() => props.city ? setModalState(true) : null}
                >
                    {props.city ? props.city : "город не выбран"}
                </h1>                
                <div className='flex items-center'>
                    <h1 className="text-3xl pe-6">{props.tempC ? props.tempC : "---"}°</h1> {/* название погоды */}
                    <p>{props.condition ? props.condition : ""}</p>
                </div>
            </div>
            {modalState? <props.modal callback={setModalState} forecasts={props.forecasts} /> : null}
            {/* {modalState ? <WeatherCardModal callback={setModalState} /> : null} */}
        </>
    )
} // fun WeatherCard

const ForecastCard = ( props ) => {
    console.log(props.payload)
const getDayOfWeek = (date) => {
    try {
        const getWeekNumber = new Date(date).getDay()
        const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

        return daysOfWeek[getWeekNumber]

    } catch(err) {
        return "---"
    }

}

    return (
        <>
            {/* {props.id == 0 ? key={props.id} className="text-red-200" : key={props.id}  */}

            <div key={props.id}>
                <h1 className={props.id == 0? "text-3xl text-sky-500" : "text-3xl"}>{getDayOfWeek(props.payload.date)}</h1>
                <ul className="space-y-12">
                        {
                            props.payload.hours.map((e, i) => {
                                return (
                                    <li className="" key={i}>
                                        <h1>{e.hour}:00</h1>
                                        <div>{e.feels_like}° - {e.condition}</div>
                                    </li>

                                )
                            
                            })
                        }
                </ul>
            </div>
        </>
    )
} // fun ForecastCard