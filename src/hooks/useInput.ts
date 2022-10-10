import {useState} from "react";

export const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue)

    const onChange = (e: any) => {
        setValue(e.target.value)
    }

    return {
        value, onChange
    }
}