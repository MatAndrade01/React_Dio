import React from 'react';
import { IconContainer, InputContainer, InputText, ErroText } from './style';
import {Controller} from "react-hook-form"

const Input = ({ leftIcon, name, control, erroMessage, ...rest }) => {
  return (
    <>
    <InputContainer>
      {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
      <Controller 
      name={name}
      control={control}
      rules={{required: true}}
      render={({field}) => <InputText {...field} {...rest}/>}
      />
      <InputText {...rest} />
    </InputContainer>
    {erroMessage ? <ErroText>{erroMessage}</ErroText> : null}
    </>
  );
}

export { Input };