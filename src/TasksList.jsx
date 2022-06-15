import React, {useState} from 'react';


const TasksList = ({items, id}) => {

    const [line, setLine] = useState(false);

    const cut = () => {
        setLine(true);
    }

    return (
        <>
           <li className="list-item" key={id} style={{textDecoration: line ? 'line-through' : 'none'}}>{items}</li>
           <button className="delete-btn" onClick={cut}><i className="material-icons delete-icon">cancel</i></button>
        </>
    )

}
export default TasksList;
