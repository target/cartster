import React from "react";
import Recipe from "./Recipe";
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"

function Menu({ recipes }) {
    return (
        <div style={{width: "80%", marginLeft: "10%"}}>
            <div>
                <h1>Basket Transfer Sample App</h1>
                <p>
                    This example application allows you to select a recipe and purchase the ingredients by transferring
                    the list of ingredients as a basket transfer to Target.com checkout.
                </p>
                <h4>Instructions</h4>
                <p>
                    Choose a recipe from the tabs below, then click on the <b>Buy at Target!</b> button below.  Your ingredients will
                    be automatically added to a Target cart, and then you will then be re-directed to the Target.com cart checkout to complete your purchase
                </p>
            </div>
            <div className="recipes">
                <Tabs defaultActiveKey={recipes[0].name}>
                {recipes.map((recipe, i) => (
                    <Tab title={recipe.name} eventKey={recipe.name} key={i}>
                        <Recipe key={i} {...recipe} />
                    </Tab>
                ))}
                </Tabs>
            </div>
            <div>
                To view code for this sample app, goto ....
            </div>
        </div>
    );
}

export default Menu;