// Code Keypad Component Here

function Keypad (){

    function hundleInputChange(){
        console.log("Entering password...");
    }

    return (
        <div>
            <input type="password" onChange={hundleInputChange} />
        </div>
    )
}

export default Keypad;