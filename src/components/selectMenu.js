import React from "react";
import { options } from "toastr";

export default (props) =>  {
    const options = props.lista.map( (option, index) => {
        return (
            <options key={index} value={options.value}>{options.label}</options>
        )
    })



    return (
        <select {...props}>
            {options}
        </select>

    )
}