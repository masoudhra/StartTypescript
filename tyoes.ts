//null, undefined, void
// any, unknown, never

let value1: null = null;
let value2: undefined = undefined;

console.log(value1, typeof value1, value2, typeof value2)

// any, unknown, never

let value: any;
value ="string"
value = true
value = 111
value = [""]
value = null
value = undefined


// type unknown safe tar az any ast vagarna mele haman

//vaghti mikhay khatayi bargardoonim va bedim be error handler az nver estefade mikonim

function sendError(): never{
    throw{error: "massage", code: 401, status: false}
}

