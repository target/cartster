import React from "react";
import Ingredient from "./Ingredient";
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import transferBasket from "./BasketTransfer";

export default function IngredientsList({ list }) {
    let lineItems = list.map((ingredient) => {
        return { "tcin": ingredient.tcin, "quantity": ingredient.quantity };
    });
    return (
        <div className="ingredients-table">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Ingredient</th>
                    </tr>
                </thead>
                <tbody>
                {list.map((ingredient, i) => (
                    <Ingredient key={i} {...ingredient} />
                ))}
                </tbody>
            </Table>
            <Button variant="danger"
                    style={{ marginBottom: "50px"}}
                    onClick={() => transferBasket(lineItems)}>
                Buy at Target!
            </Button>
        </div>
    );
}