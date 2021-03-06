import React from 'react'
import Classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Meat", type: "meat" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" }

]

export default function BuildControls(props) {
    return (
        <div className={Classes.BuildControls}>
            <p>Price : <strong>R{props.price}</strong></p>
            {controls.map(ctrl =>
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.addIngredient(ctrl.type)}
                    removed={() => props.removeIngredient(ctrl.type)}
                    buttonDisplayInfo={props.buttonDisplayInfo[ctrl.type]}
                />)}

            <button onClick={props.ordered} className={Classes.OrderButton} disabled={!props.orderPermission}>
                ORDER NOW
                </button>        
        </div>
    )
}
