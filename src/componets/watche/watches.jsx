export default function Watches({watch}){
    const {brand ,model,case_material,movement,water_resistance}=watch;
    return(
        <div>
            <h3>brand :{brand }</h3>
            <h3>model : {model}</h3>
            <h3>case_material:{case_material}</h3>
            <h3>movement: {movement}</h3>
            <h3>water_resistance:{water_resistance}</h3>
        </div>
    )
}