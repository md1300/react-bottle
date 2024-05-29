

export default function AdvanceStore({tawhid}){
   
const {id,name, ciriny}=tawhid;

    return (
        <div>
            <h3>id : {id}</h3>
            <h3>name : {name}</h3>  
            <h3> class : { ciriny} </h3>
        </div>
    )
}