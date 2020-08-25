import React from "react";

export default function Ingredient({ amount, measurement, name }) {
    return (
        <tr>
            <td>{amount} {measurement}</td>
            <td>{name}</td>
        </tr>
    );
}