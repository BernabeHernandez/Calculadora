
const suma=(v1,v2)=>v1+v2;

const resta=(v1,v2)=>v1-v2;

const multiplicacion =(v1,v2)=>v1*v2;

const division=(v1,v2)=>{
    if(v2==0){
        return "Division imposible";
    }
    else{
        return v1/v2;
    }
}

export {suma,resta,multiplicacion,division};
