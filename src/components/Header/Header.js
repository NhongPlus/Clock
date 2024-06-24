import { FaCartArrowDown } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
function Header(props) {
    const { name, img, menu, soluong } = props;

    function handleShow(e){
        console.log(e);
    }
    function handleChangeSearch(e){
        console.log(e.target.value);
    }
    return (
        <>
            <div className="header">Đây là Header</div>
            <div className="header__menu--icons" onClick={handleShow}>
                <FaHouse />
            </div>
            <div className="header__menu">
                <ul>
                    {menu.map(function (item, index) {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
            <div>
                <FaCartArrowDown className="cart" />
                {soluong}
            </div>
            <div >
                <input placeholder="Find..." onChange={handleChangeSearch}/>
            </div>
        </>
    );
}

export default Header;