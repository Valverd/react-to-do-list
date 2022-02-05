import Card from "./Card";


function ListItem(props) {


    return (
                <li key={props.item.id}>

                    <Card className={props.item.done ? "item done" : "item"}>
                        {props.item.text}
                        <div className="btns">
                            <button className={props.item.done ? "btn btn-done" : "btn"} onClick={() => props.onDone(props.item)}>Done</button>
                            <button className="btn btn-del" onClick={() => { props.onItemDeleted(props.item) }}>X</button>
                        </div>
                    </Card>

                </li>
            )

};

export default ListItem;