import { useState, useEffect } from "react"

export default function DateFormatter() {

    const [date, setDate] = useState(Date.now())
    const [dateOption, setDateOption] = useState("miliseconds")

    const changeDate = () => {
        const newDate = Date.now()
        const dateOption2 = dateOption
        switch (dateOption2) {
            case "miliseconds":
                setDate(newDate)
                break;
            case "readable":
                const newDate2 = Date(newDate)
                setDate(newDate2)
                break;
            case "local-military":
                let newDate3 = Date(newDate).slice(15, 25)
                setDate(newDate3)
                break;
            case "local-12":
                const newDate4 = new Date()
                let newDate5 = newDate4.toLocaleString('en-US', { hour: 'numeric', hour12: true})
                setDate(newDate5)
                break;
        }
    }

    useEffect(() => {
        changeDate()
    }, [dateOption])

    return (
        <div className="date-wrapper">
            <div className="date-time">

                <h3>Date time formatter</h3>
                
                Date / Time: {date}
            </div>
            <div className="select">
                <select name="" id="" value={dateOption} onChange={e => setDateOption(e.target.value)}>
                    <option value="miliseconds">Miliseconds since January 1, 1970</option>
                    <option value="readable">Date and Time</option>
                    <option value="local-military">Local Time (military time)</option>
                    <option value="local-12">Rounded Time (12 hour clock)</option>
                </select>
            </div>
        </div>
    )
}