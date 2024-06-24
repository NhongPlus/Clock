function Content(props) {

    const {text} = props 
    console.log(props);

    return (
        <>
            <div className="content">
                {text}
            </div>
        </>
    );
}

export default Content;