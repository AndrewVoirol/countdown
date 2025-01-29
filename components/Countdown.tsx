import React, { useState, useEffect } from 'react';
import { Label } from "@/components/ui/Label";

interface CountdownProps {
    targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    }, []);
    return (
        <div className='container'>
            <h1 className='text-3xl font-bold underline'>Countdown</h1>
            <Label>Time Left:</Label>
            <div>{timeLeft}</div>
        </div>
    );
};

const calculateTimeLeft = () => {
    const difference = +new Date() - +new Date(targetDate);
    let timeLeft = difference / 1000;
    return timeLeft;
}

export default Countdown;
