import { useEffect, type Dispatch, type SetStateAction } from "react";



export const useInterval = <T>(delay:number,current:number,setCurrent:Dispatch<SetStateAction<number>>,setSelectedData:Dispatch<SetStateAction<T | null>>,data:T[]) => {
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrent((prev) => (prev + 1) % data.length);
        }, delay);
        setSelectedData(data[current]);
    
        return () => clearInterval(interval);
      }, [current]);
}
