
const func1 = (arg)=>{
    arg.reduce((el,accumulator)=>accumulator+el, initialValue=0)
}

const func2 = (a,b,c?)=>{return (a,b,c?)=>{return {one:a,two:b,three?:c}}}

const obj = {a:1,b:{c:{d:3}}};

class Classik{
    readonly id:13241;
    name:"Vovan";
    email:"feldhgdhf@dsf.sfd";
    generateId:(ident=this.id)=>{return ident+Date.now()};
}



