import React from "react";
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

export const SelectContainer = styled.div`
    display: flex;
flex-direction: column;
gap: 10px;

label{
    font-weight: lighter;
    color: #24292F;
    font-size: 14px;
}

select{
    width: 40%;
    background-color: inherit;
    padding: 5px;
    border: 1px solid #D0D7DE;
    border-radius: 5px;
    color: #24292F;
    font-weight: 600;

}
`
export const Option = styled.option`
color: #24292F;
font-weight: 600;
background: white;
`

export interface OptionContent {
    value: string;
    content: string;
    id: string;
}

export interface SelectParamaters{
    label: string;
    id: string;
    width?: string;
    options?: OptionContent[];
}

export function Select({label, id, options, width}: SelectParamaters) {
    
    return (
       <SelectContainer>
            <label htmlFor={id}>{label }</label>
                    <select name="" id={id} style={{width: width}}>
                {
                options && options.map((item) => <Option value={item.value} key={item.id}>
                       {item.content} 
                    </Option>)
                       }        
                
                   </select>
               </SelectContainer>
    )
}


export const RadioContainer = styled.div`
  text-align: center;
 display: flex;
 flex-direction: row !important;
 width: 18% !important;

 label{
    font-size: 13.5px;
    color: #57606A;
 }

 .max{
    width: 30px;
    margin-left: -20px;
 }
`



export const RadioWrapper = styled.fieldset`
 display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: 15px;
  align-self: flex-start;
  padding-bottom: 20px;

  p{
    width: 65%;
    font-size: 14px;
  }
`

export interface SingleRadio {
    value: string;
    id1: string;
    id2: string;
    label: string;
    id: string;
}

export interface RadioOptions{
    Label: string;
    RadioOptions?: SingleRadio[];
}


export function Radio({ RadioOptions, Label }: RadioOptions) {
    const location = useLocation().pathname;


    return (
        <RadioWrapper>
                <p>{Label}:</p>
            {
                RadioOptions && RadioOptions.map(
                 (item)=><RadioContainer key={item.id}>
          <input
          type="radio"
          id={item.id1}
                            value={item.value}
         className={location.includes("/student/education/instituitions") ? "max" : ""}
        />
         <label htmlFor={item.id1 } id={item.id2}>
         {item.label}
        </label>
            </RadioContainer>
             )  
        }
            </RadioWrapper>
    )
}