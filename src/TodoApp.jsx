import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Checkbox, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const handleToggleComplete = (index) => {
        const newTodos = todos.map((todo, i) => 
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Todo App
            </Typography>
            <TextField
                label="Add a new todo"
                value={inputValue}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleAddTodo}
                fullWidth
            >
                Add
            </Button>
            <List>
                {todos.map((todo, index) => (
                    <ListItem key={index} dense button>
                        <Checkbox
                            checked={todo.completed}
                            tabIndex={-1}
                            disableRipple
                            onClick={() => handleToggleComplete(index)}
                        />
                        <ListItemText primary={todo.text} />
                        <div>
                            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTodo(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default TodoApp;