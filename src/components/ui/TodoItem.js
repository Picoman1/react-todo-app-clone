import React from 'react';
import CheckBox from './CheckBox';

export default function TodoItem(props) {
    const {data, changeStatus, updatePriority, updateDueDate} = props; 
    const handleChange = (checked) => changeStatus(data.id, checked);
    const handlePriorityChange = (e) => updatePriority(data.id, e.target.value); 
   
    const handleDueDateChange = (e) => updateDueDate(data.id, e.target.value);

    const className = 'todo-item ui-state-default ' + (data.completed ? 'completed' : 'pending');

    return (
        <li className={className}>
            <div className="checkbox">
                <label>
                    <CheckBox checked={data.completed} onChange={handleChange} /> 
                    {data.text} 
                   
                    <span className="priority">({data.priority})</span> 
                    <span className="due-date">[Due: {data.dueDate || 'None'}]</span> 
                </label>
            </div>
           
            <select value={data.priority} onChange={handlePriorityChange} className="priority-selector">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            
            <input 
                type="date" 
                value={data.dueDate || ''} 
                onChange={handleDueDateChange} 
                className="due-date-selector" 
            />
        </li>
    );
}



