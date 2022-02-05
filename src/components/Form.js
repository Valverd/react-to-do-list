import React, { useState } from "react";

function Form(props) {

    const [text, setText] = useState('');

    function handleChange(e) {
        let inputText = e.target.value;
        setText(inputText);
    };

    function addItem(e) {
        e.preventDefault();
        if (text) {
            props.onAddItem(text);
            setText('');
            props.hideModal(e);
        } 
    };


    return (
        <form>
            <input type="text" onChange={handleChange} value={text}></input>
            <button id="add" onClick={addItem}>add</button>
        </form>
    );
};

export default Form;