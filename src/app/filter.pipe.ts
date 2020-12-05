import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(flights:any[],search: any,search1:any): any {
    console.log(flights,search,search1)

    if (!flights) {
      return [];
    }

    if (typeof (search) == 'string') {
      search = search.toLowerCase();
    }
    if (typeof (search1) == 'string') {
      search1 = search1.toLowerCase();
    }
    // console.log(search.toLowerCase().includes(flights[1].sourceCity.toLowerCase()));

    return flights.filter(flight => {

      if(search && !search1){
        if( flight.sourceCity.toLowerCase().includes(search.toLowerCase()))
        {
          return flight;
        }
      }
      else if(search1 && !search){
        if(flight.destinationCity.toLowerCase().includes(search1.toLowerCase()))
        {
          return flight;
        }
      }
      else if(search && search1){

        if(flight.sourceCity.toLowerCase().includes(search.toLowerCase()) && flight.destinationCity.toLowerCase().includes(search1.toLowerCase()))
        {
          return flight;
        }

      }
      else{
        return flight;
      }
    });








    // if(search || search1){
    //   return flights.filter(flight1=>{
    //     if(flight1.sourceCity.toLowerCase() === search && flight1.destinationCity.toLowerCase() === search1)
    //      return flight1;
    //     // return flights.find(flight => flight.sourceCity.toLowerCase() === search.toLowerCase())
    //   });
    // }else{
    //   return flights;
    // }
  }
}
