import { useEffect, useState } from 'react';
import { Days } from './../pages/ThirdPage/style'

export default function DaysButtons({ isSelected, d, chooseDays, index, disabled }) {

    const [status, setStatus] = useState({ background: "#FFFFFF", color: "#DBDBDB" });



    useEffect(() => {
        if (isSelected) {
            setStatus({ background: "#CFCFCF", color: "#FFFFFF" })
        } else {
            setStatus({ background: "#FFFFFF", color: "#DBDBDB" })
        }
    }, [isSelected])


    return (
        <Days
            data-test="habit-day"
            onClick={() => chooseDays(index)}
            disabled={disabled}
            status={status}>
            {d}
        </Days>
    )
}