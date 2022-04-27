import { useState, useEffect, useCallback } from "react";
import API from '../API'

export const usePersonFetch = personId => {
    const [state,setState] = useState({});
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false)

    useEffect(() => {
        const fetchPersonCredits = async () => {
            
            try {
                setLoading(true);
                setError(false);

                const personCredits = await API.fetchPersonCredits(personId);
                
                
                setState({
                    personCredits
                });

                setLoading(false);

                console.log(personCredits);
            }
            
            catch (error){
                setError(true);
            }
        }; fetchPersonCredits();
    },[personId])

    

    return {state,loading,error}
}