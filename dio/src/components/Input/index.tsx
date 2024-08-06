import React from 'react';
import { IconContainer, InputContainer, InputText, ErroText } from './styles';
import {Controller} from "react-hook-form"
import { IInput } from './types';

const Input = ({ leftIcon, name, control, erroMessage, ...rest }: IInput) => {
  return (
    <>
    <InputContainer>
      {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
      <Controller 
      name={name}
      control={control}
      rules={{required: true}}
      render={({field: { value, onChange}}) => (
      <InputText value={value} onChange={onChange} {...rest}/>
      )}
      />
      <input/>
      <InputText {...rest} />
    </InputContainer>
    {erroMessage ? <ErroText>{erroMessage}</ErroText> : null}
    </>
  );
}

export { Input };