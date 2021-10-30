export default class MyDate {
    constructor(){
        this.date = new Date();
    }
    compareDay(string){
        //var lineCol = string.split('-');
        var dia = this.dateString(2, string);
        //var mouthTask = Number.parseInt(lineCol[1]);
        //var yearTask = Number.parseInt(lineCol[0]);
        return dia;
    }
    compareMouth(string){
        var mouth = this.dateString(1, string);
        return mouth;
    } 
    compareYear(string){
        var year = this.dateString(0, string);
        return year;
    }
    dateString(position, string){
        var lineCol = string.split('-');
        return Number.parseInt(lineCol[position]);
    }   
    validationDate(string){
        if(this.date.getUTCFullYear() >= this.compareYear(string)){
            if(this.date.getMonth()+1 >= this.compareMouth(string)){
                if(this.date.getUTCDay() >= this.compareDay(string)){
                    return true;
                }
            }
        }else{
            return false;
        }
    }
}
