import React, { useEffect, useState } from "react";
import List from "./components/List";
import Item from "./components/Item";
import Modal from "./components/Modal";

const SAVED_ITEMS = 'savedItems';

function Todo() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        if (savedItems) {
            setItems(savedItems);
        }
    }, []);


    useEffect(() => {

        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));

    }, [items]);


    function onAddItem(text) {

        let item = new Item(text);
        setItems([...items, item]);

    }

    function onItemDeleted(itemToDelete) {

        let filteredItems = items.filter(item => item.id !== itemToDelete.id);
        setItems(filteredItems);

    }

    function onDone(itemToDone) {

        let doneItems = items.map(item => {
            if (item.id === itemToDone.id) {
                item.done = !item.done;
            };
            return item;
        });

        setItems(doneItems);

    };

    const [showModal, setShowModal] = useState(false);

    function hideModal(e){
        let target = e.target;
        if(target.id === 'modal' || target.id === 'add'){
            setShowModal(false);
        };
    };


    return (

        <div className="container">

            <div className="to-do">
                <header className="header">

                    <h1>Todo</h1>
                    <button onClick={() => {setShowModal(true)}} className="btn-modal">+</button>

                </header>

                <Modal showModal={showModal} hideModal={hideModal}  onAddItem={onAddItem}></Modal>

                <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
            </div>

        </div>
    )

}

export default Todo;