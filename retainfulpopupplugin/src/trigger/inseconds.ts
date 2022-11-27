export default class InSecondEvent implements IFInSecondEvent{
    public seconds!: number;
    public secondsactive!:boolean
    protected timeid!: NodeJS.Timeout;
    constructor(seconds:number){
        this.seconds=seconds
        this.secondsactive=false
        this.calSeconds()
    }

    private calSeconds(){
        this.timeid = setTimeout(() => {
            this.secondsactive=true;
        }, Number(this.seconds.toString().padEnd(4,'0000')));
    }

    public closeTimeid(){
        if (this.timeid) {
            clearTimeout(this.timeid)
        }else{
            console.warn('No Time id')
        }   
    }
} 

interface IFInSecondEvent{
    seconds:number,
    secondsactive:boolean
}