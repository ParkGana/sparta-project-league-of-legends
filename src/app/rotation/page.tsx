'use client';
import { RotationType } from '@/types/Rotation';
import { useEffect } from 'react';

export default function Rotation() {
    useEffect(() => {
        fetch('/api/rotation')
            .then((res) => res.json())
            .then((data: RotationType) => console.log('rotation => ', data));
    }, []);

    return <div>Rotation</div>;
}
