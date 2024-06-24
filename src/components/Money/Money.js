import { useState } from "react";

function Money() {

    const [tien , setTien] = useState(1);
    const Price = 12000;
    function ChangeMoney(e){
        let num = parseInt(e.target.value);
        setTien(num);
    }   
    return (<>
        <table>
            <thead>
                <tr>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Giày thể thao nam cao cấp</td>
                    <td><input 
                        onChange={ChangeMoney}
                        defaultValue={tien}
                        type="number"
                        min="1"
                    /></td>
                    <td>{Price}</td>
                    <td>{Price * tien}</td>
                </tr>
            </tbody>
        </table>
    </>);
}

export default Money;