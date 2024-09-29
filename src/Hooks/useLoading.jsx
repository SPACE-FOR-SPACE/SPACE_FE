import { useState, useEffect } from 'react';

function useLoading(dependency) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const Load = () => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        };

        Load();
    }, [dependency]);

    return loading;
}

export default useLoading;
