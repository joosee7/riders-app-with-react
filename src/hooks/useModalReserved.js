import { useState } from "react"

export const useModalReserved = () => {

    const [riderReserved, setRiderReserved] = useState(false);

    return [ riderReserved, setRiderReserved ];
}
