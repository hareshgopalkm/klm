import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  standalone:true,
  name: 'convertToHoursMinutes'
})
export class ConvertToHourseMinutesPipe implements PipeTransform {

  transform(time: string): string {
    let totalMinutes = parseInt(time);
    let hours:number = (totalMinutes / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + " hour(s) and " + rminutes + " minute(s).";
  }
}