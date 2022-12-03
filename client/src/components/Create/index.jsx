import React, { useState } from 'react';
import Axios from 'axios';
import style from './Create.module.css';

function Create () {
    const [input, setInput] = useState({ name: '', health: 0, attack: 0, defense: 0, speed: 0, height: 0, weight: 0, image: '', front: '' });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({
        nameError: '', 
        healthError: '', 
        attackError: '',
        defenseError: '',
        speedError: '',
        heightError: '',
        weightError: '',
        imageError: '',
        frontError: ''
    });    
    const url = 'http://localhost:3001/api/pokemon';

    function validateName (value) {
        if (!value) {
            setErrors({...errors, nameError: 'The field cannot be null'});
        }
        else {
            setErrors({...errors, nameError: ''});
        }
    }

    function validateHealth (value) {
        if (!value) {
            setErrors({...errors, healthError: 'The field cannot be null'});
        }
        else {
            setErrors({...errors, healthError: ''});
        }
    }

    function validateAttack (value) {
        if (!value) {
            setErrors({...errors, attackError: 'The field cannot be null'});
        }
        else {
            setErrors({...errors, attackError: ''});
        }
    }

    function validateDefense (value) {
        if (!value) {
            setErrors({...errors, defenseError: 'The field cannot be null'});
        }
        else {
            setErrors({...errors, defenseError: ''});
        }
    }

    function validateSpeed (value) {
        if (!value) {
            setErrors({...errors, speedError: 'The field cannot be null'});
        }
        else {
            setErrors({...errors, speedError: ''});
        }
    }

    function validateHeight (value) {
        if (!value) {
            setErrors({...errors, heightError: 'The field cannot be null'});
        }
        else {
            setErrors({...errors, heightError: ''});
        }
    }

    function validateWeight (value) {
        if (!value) {
            setErrors({...errors, weightError: 'The field cannot be null'});
        }
        else {
            setErrors({...errors, weightError: ''});
        }
    }

    function validateImage (value) {
        if (!value) {
            setErrors({...errors, imageError: 'The field cannot be null'});
        }
        else {
            setErrors({...errors, imageError: ''});
        }
    }

    function validateFront (value) {
        if (!value) {
            setErrors({...errors, frontError: 'The field cannot be null'});
        }
        else {
            setErrors({...errors, frontError: ''});
        }
    }

    function handleChange (event) {
        setInput({...input, [event.target.name]: event.target.value});
        switch (event.target.name) {
            case 'name': validateName(event.target.value);
                break;
            case 'health': validateHealth(event.target.value);
                break;
            case 'attack': validateAttack(event.target.value);
                break;
            case 'defense': validateDefense(event.target.value);
                break;
            case 'speed': validateSpeed(event.target.value);
                break;
            case 'height': validateHeight(event.target.value);
                break;
            case 'weight': validateWeight(event.target.value);
                break;
            case 'image': validateImage(event.target.value);
                break;
            case 'front': validateFront(event.target.value);
                break;
            default: setInput({ name: '', health: 0, attack: 0, defense: 0, speed: 0, height: 0, weight: 0, image: '', front: '' });
        }
    }

    function handleSubmit (event) {
        event.preventDefault();
        setSubmitted(true);
        Axios.post(url, input).then(response => console.log(response.data));
        setInput({ name: '', health: 0, attack: 0, defense: 0, speed: 0, height: 0, weight: 0, image: '', front: '' });
    }

    return (
        <div className='creation'>
            <div>
                <form onSubmit={(event) => handleSubmit(event)} className={style.form}>
                    <h2 className={style.title}>Create Pokemon</h2>
                    <div className={style.container}>
                        <div className={style.group}>
                            <label htmlFor='name'>Name: </label>
                            <input id='name' type={'text'} name={'name'} value={input.name} className={errors.nameError && style.danger} onChange={(event) => handleChange(event)}></input>                            
                            {!errors.nameError ? null : <p className={style.danger}>{errors.nameError}</p>}
                            <label htmlFor='health'>Health: </label>
                            <input id='health' type='number' name={'health'} value={input.health} className={errors.healthError && style.danger} onChange={(event) => handleChange(event)}></input>                        
                            {!errors.healthError ? null : <p className={style.danger}>{errors.healthError}</p>}
                            <label htmlFor='attack'>Attack: </label>
                            <input id='attack' type='number' name={'attack'} value={input.attack} className={errors.attackError && style.danger} onChange={(event) => handleChange(event)}></input>
                            {!errors.attackError ? null: <p className={style.danger}>{errors.attackError}</p>}
                            <label htmlFor='defense'>Defense: </label>
                            <input id='defense' type='number' name={'defense'} value={input.defense} className={errors.defenseError && style.danger} onChange={(event) => handleChange(event)}></input>
                            {!errors.defenseError ? null : <p className={style.danger}>{errors.defenseError}</p>}
                            <label htmlFor='speed'>Speed: </label>
                            <input id='speed' type='number' name={'speed'} value={input.speed} className={errors.speedError && style.danger} onChange={(event) => handleChange(event)}></input>
                            {!errors.speedError ? null : <p className={style.danger}>{errors.speedError}</p>}
                            <label htmlFor='height'>Height: </label>
                            <input id='height' type='number' name={'height'} value={input.height} className={errors.heightError && style.danger} onChange={(event) => handleChange(event)}></input>
                            {!errors.heightError ? null : <p className={style.danger}>{errors.heightError}</p>}
                            <label htmlFor='weight'>Weight: </label>
                            <input id='weight' type='number' name={'weight'} value={input.weight} className={errors.weightError && style.danger} onChange={(event) => handleChange(event)}></input>
                            {!errors.weightError ? null : <p className={style.danger}>{errors.weightError}</p>}
                            <label htmlFor='image'>Image: </label>
                            <input id='image' type='text' name='image' value={input.image} className={errors.imageError && style.danger} onChange={(event) => handleChange(event)}></input>
                            {!errors.imageError ? null : <p className={style.danger}>{errors.imageError}</p>}
                            <label htmlFor='front'>Front image: </label>
                            <input id='front' type='text' name='front' value={input.front} className={errors.frontError && style.danger} onChange={(event) => handleChange(event)}></input>
                            {!errors.frontError ? null : <p className={style.danger}>{errors.frontError}</p>}
                            <button type='submit' value={'CREATE'} disabled={errors.nameError || errors.healthError || errors.attackError || errors.defenseError || errors.speedError || errors.heightError || errors.weightError || errors.imageError || errors.frontError || !input.name || !input.health || !input.attack || !input.defense || !input.speed || !input.height || !input.weight || !input.image || !input.front } onClick={(event) => handleSubmit(event)} className={style.button}>Create Pokemon</button>
                        </div>
                    </div>                    
                </form>
                {submitted && <h2 className={style.confirmation}>Pokemon successfully set</h2>}
            </div>
        </div>
    )
}
export default Create;