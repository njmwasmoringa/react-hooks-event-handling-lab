
export default function EyeOnMe(){

    function hundleFocus(){
        console.log('Good!');
    }

    function hundleBlur(){
        console.log('Hey! Eyes on me!');
    }

    return <button type="button" onBlur={hundleBlur} onFocus={hundleFocus}>Eyes on me</button>
}