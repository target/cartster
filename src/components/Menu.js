import React from "react";
import Recipe from "./Recipe";
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import {Image} from "react-bootstrap";

function Menu({ recipes }) {
    return (
        <div style={{width: "80%", marginLeft: "10%"}}>
            <div>
                <Image style={{margin: "15px" }} src="./Bullseye.png" /><h1>Basket Transfer Sample App</h1>
                <p>
                    This example application allows you to select a recipe and purchase the ingredients by submitting
                    the list of ingredients as a basket transfer to Target.com checkout.
                </p>
                <h4 style={{marginTop: "10px"}}>Instructions</h4>
                <p>
                    Choose a recipe from the tabs below, then click on the <b>Buy at Target!</b> button below the ingredients.<br/>
                    Your ingredients will be automatically added to a Target cart, and you will then be re-directed to the Target.com cart checkout to complete your purchase.
                </p>
            </div>
            <div style={{marginTop: "25px", marginBottom: "25px"}}>
                <Button variant="primary" href="https://git.target.com/off-platform-experience/cartster" target="_blank">View sample code in Github</Button>
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
        </div>
    );
}

export default Menu;
