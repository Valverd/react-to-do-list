import React from "react";
import Card from "./Card";
import Form from "./Form";

function Modal(props) {
    

    return (
        <div id="modal" onClick={props.hideModal} className={props.showModal? "modal" : "modal hide"}>
            <Card className="cardModal">
                <Form hideModal={props.hideModal} onAddItem={props.onAddItem}></Form>
            </Card>
        </div>
    );
};

export default Modal;