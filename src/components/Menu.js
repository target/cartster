import React from "react";
import Recipe from "./Recipe";
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"

function Menu({ recipes }) {
    return (
        <div style={{width: "80%", marginLeft: "10%"}}>
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