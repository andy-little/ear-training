import {useEffect} from 'react'

const useCustomVH = () => {

    /* this hook gets height of vieport minus menubars etc and sets a css var at root to be used in css the same way you would use vh */

    function setCSSHeightVar(){
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    useEffect(() => {  
        window.addEventListener("resize", setCSSHeightVar);
        return () => {
        window.removeEventListener("resize", setCSSHeightVar);
        }
    }, []);


    useEffect(()=>{
        setCSSHeightVar();
    },[])

}

export default useCustomVH
