import { useState } from "react";

function Lamp() {
    // let status = false;

    const [status , setStatus] = useState(false)
  
    function ChangeLamp(){
        setStatus(!status)
    }
    return (<>
        <button onClick={ChangeLamp}>Bật/Tắt</button>
        {status ? (<div>Đèn đang tắt</div>) : (<div>Đèn đang bật</div>)}
    </>);
}

export default Lamp;