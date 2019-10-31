import { Injector} from "@angular/core";

export class CommonLibrary {
  private static instance: CommonLibrary = null;

  // Return the instance of the service
  public static getInstance(): CommonLibrary {

    if (CommonLibrary.instance === null) {
      CommonLibrary.instance = new CommonLibrary();
    }
    return CommonLibrary.instance;
  }


  public getFormattedDateString(dateString: Date): string {
    var str = dateString.getFullYear().toString() + "-" +
          ("0"+(dateString.getMonth() + 1).toString()).slice(-2) +
          "-" + ("0"+ dateString.getDate().toString()).slice(-2);

    // var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // var date = new Date(dateString);
    // str = date.getDate() +"-" + months[date.getMonth()] +"-"+  date.getFullYear();
    return str;
  }

   //20-Aug-2019
  public getFormattedDate(dateString: string): string {
    let str: string;
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var date = new Date(dateString);
    str = date.getDate() +"-" + months[date.getMonth()] +"-"+  date.getFullYear();
    // str =date.getHours()+"-"+date.getMinutes()+"-"+date.getSeconds();
    return str;
  }

   //20-Aug-2019 10:23
  public getFormattedDateTime(dateString: string): string {
    let str: string;
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var date = new Date(dateString);
    str = date.getDate() +"-" + months[date.getMonth()] +"-"+  date.getFullYear()+" "+ date.getHours()+":"+ date.getMinutes();
    // str =date.getHours()+"-"+date.getMinutes()+"-"+date.getSeconds();
    return str;
  }

  // public getFormattedTime(dateString: string): string {
  //   let str: string;
  //   var date = new Date(dateString);
  //   str = date.getHours()+":"+ date.getMinutes()+":"+ date.getSeconds();
  //   return str;
  // }


  //28-08-2019 to 2019-08-28
  public getDateTime(dateString: string): Date {
    var from:string[] = dateString.split("-")
    var f = new Date(from[2] +"-" + from[1] +"-"+ from[0]);
    return f;
  }
}
