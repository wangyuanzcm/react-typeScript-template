interface IYD{
    str:string
}
class Index{
    private data;
    constructor(data:IYD){
        this.data=data
    }
    og(){
        console.log(this.data)
    }
}