import Events from "./trigger";

const {SpecificClickEvents,MouseEventExitIntent}= Events()

// Pointer events works both in mobile and desktop.
export default document.addEventListener('DOMContentLoaded',(e:any)=>{
    // @ts-ignore
    const button = new SpecificClickEvents('')


    let mxi = new MouseEventExitIntent()
    
    console.log(mxi.watch);
    
    
})
