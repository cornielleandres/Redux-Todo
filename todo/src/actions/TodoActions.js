export const HANDLE_SUBMIT = 'HANDLE_SUBMIT';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const DELETE_ITEM = 'DELETE_ITEM';
export const REMOVE_ALL_COMPLETED = 'REMOVE_ALL_COMPLETED';

export const handleSubmit = value => {
    return {
        type: HANDLE_SUBMIT,
        payload: value
    };
};

export const toggleCompleted = id => {
    return {
        type: TOGGLE_COMPLETED,
        payload: id
    };
};

export const deleteItem = id => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}

export const removeAllCompleted = () => ({
    type: REMOVE_ALL_COMPLETED
});
