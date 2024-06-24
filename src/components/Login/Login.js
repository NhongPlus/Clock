import { useState } from "react";

function Login() {
    const arr = [
        "trang chủ",
        "sản phẩm",
        "cart",
        "giới thiệu",
    ]
    const [state, setChange] = useState(false);
    function Change() {
        setChange(!state);
    }
    return (
        <>
            {/* {isLogin ? (<><div>Đây là login</div></>) : (<><div>Đây là đăng nhâp</div></>)} */}

            {state ? (
                arr.map((item, index) => {
                    return (<li key={index}>{item}</li>)
                })
            ) : (<></>)}
            <button onClick={Change}>Đăng nhập</button>
        </>
    )
}
// Phần key chính là index (tức là index trong array)
export default Login;