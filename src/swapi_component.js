import { useState } from "react"

export default function SwapiComponent (props) {

    const [showAll, setShowAll] = useState(false)
    const keys = props.keys

    const showData = () => {
        return (
            keys.map((key, idx) => {
                return (
                    <tr>
                        <td style={{width: "130px"}}>{props.keys[idx]}</td>
                        <td>{props.item[key]}</td>
                    </tr>
                )
            })
        )
    }

    return (
        <div className="data-wrapper" key={props.item.name}>
            <div className="name-wrapper">
                <div className="left">
                    {props.item.name}
                </div>
                <div className="right">
                    <button onClick={() => setShowAll(!showAll)}>
                        Show specific data?
                    </button>
                </div>
            </div>
            <div className="results-wrapper">
                {showAll && 
                    <table cellSpacing={0} border={1}>
                        <tbody>
                            <tr style={{fontWeight: 600}}>
                                <td >Attribute</td>
                                <td>Data</td>
                            </tr>
                            {showData()}
                        </tbody>
                    </table>
                }
            </div>
            <br/>
        </div>
    )
}

