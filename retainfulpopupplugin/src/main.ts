import Events from "./trigger";

const {SpecificClickEvents,MouseEventExitIntent,ScrollEvent}= Events()

// Pointer events works both in mobile and desktop.
export default document.addEventListener('DOMContentLoaded',(_e:any)=>{
    // @ts-ignore
    const button = new SpecificClickEvents('#btn')


    const mxi = new MouseEventExitIntent()
    

    const se = new ScrollEvent(20)
    
    
})
