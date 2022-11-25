export default class MouseEvents implements IFMouseEvents{
    watch: boolean
    constructor(watch:boolean){
        this.watch=watch
        this.watchMouseCursor()
    }

    watchMouseCursor(){
        
        
        if (this.watch) {
            console.log(this.watch);
            document.addEventListener('mouseout',(e)=>{
                console.log('yes',e);
            })
        }
    }
}


export interface IFMouseEvents{
    watch:boolean
}