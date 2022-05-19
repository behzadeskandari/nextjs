let WINDOW = {}

if(process.browser){
    WINDOW = window
}else{
    const WINDOW = {
        document : {
            location : {

            }
        },
        localStorage: {
                getItem: () => {},
                setItem: () => {}
        }
    }
}
export default WINDOW;