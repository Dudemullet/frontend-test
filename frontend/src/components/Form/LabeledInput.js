import React from 'react';
import Input from './Input';

const LabeledInput = ({label, ...props}) => {
  return <label>
      {label}
      <Input {...props}>
        {props.children}
      </Input>
    </label>
}

export default LabeledInput;