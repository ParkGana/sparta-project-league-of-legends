'use client';
import { useEffect } from 'react';

export default function Rotation() {
    useEffect(() => {
        fetch('/api/rotation')
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);

    return <div>Rotation</div>;
}
