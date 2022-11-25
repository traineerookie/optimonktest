import Events from "./tracker";

const {ButtonEvents,MouseEvents}= Events()

export default document.addEventListener('click',(e:any)=>{
    // @ts-ignore
    const button = new ButtonEvents(e.target!.nodeName)
    console.log(e,button);

    let m = new MouseEvents(true)    
    
})
