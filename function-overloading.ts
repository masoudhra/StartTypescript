//1705538923424
// function makeDateByTimestamp(timestamp: number): Date {
//   return new Date(timestamp);
// }
// function makeDateByYMD(Y: number, M: number, D: number):Date {
//   return new Date(Y, M, D);
// }
// function makeDateByDate(date: string):Date {
//     return new Date(date);
//   }
// console.log(makeDateByTimestamp(1705538923424));
// console.log(makeDateByYMD(2024, 1, 18));
// console.log(makeDateByDate("2024-01-18T00:55:06.271Z"))


function makeDate(date: string): Date;
function makeDate(timestamp: number): Date;
function makeDate(Year: number, Month: number, Day: number): Date;
function makeDate(DTY: string | number, Month?: number, Day?: number): Date{
    if(DTY && !Month && !Day){
        return new Date(DTY)
    }
    else{
        return new Date(+DTY, Month || 1, Day || 1)
    }
}
console.log(makeDate("2024-02-17T11:00:00.000Z"))
console.log(makeDate(1705538923424))
console.log(makeDate(2024, 1, 19))

