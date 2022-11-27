export default class ScrollEvent implements IFScrollEvent{
    public percentage: number;
    public currentPercentage!: number;
    constructor(percentage:number){
        this.scroll()
        this.percentage=percentage
    }

    public percentageStatus():boolean{
        if (Number(this.calPrecentage)===Number(this.percentage)) {
            return true;
        }else{
            return false;
        }
    }

    private scroll(){
        window.addEventListener('scroll',(_e)=>{
            this.calPrecentage();
        })
    }

    private calPrecentage():void{
        this.currentPercentage=
            Math.floor((this._get_window_Yscroll() + this._get_window_height()) / this._get_doc_height() * 100);
    }

    private _get_window_height() {
        return window.innerHeight || 
               document.documentElement.clientHeight ||
               document.body.clientHeight || 0;
    }

    private _get_window_Yscroll() {
        return window.pageYOffset || 
               document.body.scrollTop ||
               document.documentElement.scrollTop || 0;
    }

    private _get_doc_height() {
        return Math.max(
            document.body.scrollHeight || 0, 
            document.documentElement.scrollHeight || 0,
            document.body.offsetHeight || 0, 
            document.documentElement.offsetHeight || 0,
            document.body.clientHeight || 0, 
            document.documentElement.clientHeight || 0
        );
    }
}


interface IFScrollEvent{
    percentage:number,
    currentPercentage:number
}