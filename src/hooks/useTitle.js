import { useEffect } from "react"

const useTitle = (title) =>{

    useEffect(() =>{
        document.title = `Lingua learn | ${title}`;
    },[title])
}

export default useTitle;