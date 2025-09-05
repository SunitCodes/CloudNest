import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";
import { apiEndpoints } from "../utils/apiEndpoints";
import { useAuth } from "@clerk/clerk-react";
import toast from "react-hot-toast";

export const UserCreditsContext = createContext();

export const UserCreditsProvider = ({children}) => {

    const [credits, setCredits] = useState(5);
    const [loading, setLoading] = useState(false);
    const { getToken, isSignedIn } = useAuth();

    // Function to fetch the user credits that can be called from anywhere
    const fetchUserCredits = useCallback(async () => {
        if (!isSignedIn) return;

        setLoading(true);

        try {
            const token = await getToken();
            const response = await axios.get(apiEndpoints.FETCH_CREDITS, { headers: { Authorization: `Bearer ${token}` } });
            if(response.status === 200)
                setCredits(response.data.credits);
            else
                toast.error("Error fetching the credits");
        } catch (error) {
            console.error('Error fetching the user credits', error);
        } finally {
            setLoading(false);
        }
    }, [getToken, isSignedIn]);

    const updateCredits = useCallback( newCredits => {
        console.log('Updating the user credits', newCredits);
        setCredits(newCredits);
    }, [])

    const contextValue = {
        credits,
        setCredits,
        fetchUserCredits,
        updateCredits
    }

    useEffect( ()=> {
        if(isSignedIn){
            fetchUserCredits();
        }
    }, [fetchUserCredits, isSignedIn])

    return (
        <UserCreditsContext.Provider value = {contextValue}>
            {children}
        </UserCreditsContext.Provider>
    )
}