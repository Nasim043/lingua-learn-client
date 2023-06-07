import { useEffect } from "react"

const useTitle = (title) =>{

    useEffect(() =>{
        document.title = `My App | ${title}`;
    },[title])
}

export default useTitle;