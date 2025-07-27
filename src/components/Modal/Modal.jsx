import { useState } from 'react';
import classes from './Modal.module.css';

function Modal ({children, onClose}) 
{    
    return (
        <>    
        <div className={classes.backdrop} onClick={onClose}></div>
        <dialog open className={classes.dialog}>
            {children} 
        </dialog>
        </>
    );
}

export default Modal;