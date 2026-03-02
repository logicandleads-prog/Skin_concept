import React, { useReducer, useEffect } from 'react';
import './Selectbox.css';

const selectboxReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        // isValid: action.validators ? action.validators.every(validator => typeof validator === 'function' && validator(action.val)) : true
        isValid: action.val.trim() == '' ? false : true
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true
      };
    }
    default:
      return state;
  }
};

const Selectbox = props => {
  const [selectboxState, dispatch] = useReducer(selectboxReducer, {
    value: props.initialValue || '',
    isTouched: false,
    isValid: props.initialValid || false
  });

  const { id, onInput } = props;
  const { value, isValid } = selectboxState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = event => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH'
    });
  };

  return (
    <div
      className={`custom-form-control ${!selectboxState.isValid && selectboxState.isTouched &&
        'custom-form-control--invalid'}`}
    >
      {/* <label htmlFor={props.id}>{props.label}</label> */}
      <select
        id={props.id}
        value={selectboxState.value}
        onChange={changeHandler}
        onBlur={touchHandler}
        className={props.className}
      >
        {props.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {!selectboxState.isValid && selectboxState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Selectbox;
