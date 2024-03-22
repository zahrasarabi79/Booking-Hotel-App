import {useEffect} from 'react'

const useOutsideClick = (ref, exceptionId, callBackFunc) => {

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (ref.current && !ref.current.contains(event.target) && event.target.id !== exceptionId) {
                callBackFunc()
            }
        }
        document.addEventListener('mousedown', handleOutsideClick)

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [ref, callBackFunc]);
}

export default useOutsideClick