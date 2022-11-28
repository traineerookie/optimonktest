import Rules from "./Rules";


// Pointer events works both in mobile and desktop.
export default document.addEventListener('DOMContentLoaded',async (_e:any)=>{
    let rules:any;

    function checkIfWindowHasData(){
        return new Promise(resolve=>{
                if (window.RetainfulPopUp!==undefined) {
                    return resolve(rules = window.RetainfulPopUp)
                }

                const observer = new MutationObserver(()=>{
                    if (window.RetainfulPopUp!==undefined) {
                        resolve(rules = window.RetainfulPopUp)
                        observer.disconnect()
                    }
                })

                observer.observe(document.body,{
                    childList:true
                })
        })
    }
    
    await checkIfWindowHasData() 

    if (typeof rules==='object') {

        const rulesEngine:any = new Rules(rules.data,rules)

        rulesEngine.validateRules();
    
    }else{
        console.warn('Popup not initialized');
        
    }
    

    
    
})
