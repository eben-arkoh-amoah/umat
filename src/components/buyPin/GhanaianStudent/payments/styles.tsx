import styled from 'styled-components';

export const Container = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 20px;

`;

export const Options = styled.img`
  width: 200px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 20px;

  .options{
    display: flex;

    fieldset{
      max-width: 100%;

      input{
        margin-left: 20px;
      }
    }

    @media (max-width: 400px){
      width: 100%;
      font-size: 12px;
      justify-content: flex-start;

      fieldset{
        width: 100%;
        margin-left: -30px;
        gap: 5%;
        label{
          width: 100%;
        }

        input{

        }
      }
    }
  }

  .payment{
    @media (max-width: 600px){
      width: 100%;
      justify-content: flex-start;
      display: flex;
      flex-direction: row;
      margin-bottom: 20px;
    
    .option{
      width: 100%;
      padding-left: 10px;
    }

    }
    label {
      width: 100%;
    }

    .option{
      color: #03453F;
      font-weight: bold;
      font-size: 14px;
    }

    }
  }

  .buttonContainer {
    align-self: flex-start;
    padding-left: 20px;
  }

.space{
  gap: 20px;
}

  .fieldset2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: -20px;
   
   .inputs{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
   margin-bottom: -50px;
   }

    legend {
      padding-bottom: 20px;
    }
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 90%;
      padding-bottom: 30px;

      .inp1 {
        width: 15%;
        padding: 5px;
      }
      .inp2 {
        width: 25%;
        padding: 5px;

      }
      .inp3 {
        width: 30%;
        padding: 5px;

      }
    }
  }
`;

export const SelectNationality = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  color: #0a7c72;
  
  label{
    color: #0A7C72;
    font-weight: bold;
    font-size: 14px;
  }

  input{
    width: 30px;
  }

@media (max-width: 600px){
  align-items: center;

  label{
  font-size: 12px;
  }

input{
 height: 17px;
}
}
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 15px;
  text-align: center;
  align-self: flex-start;
  padding-bottom: 20px;
  
  
`;

export const VisaLogo = styled.img`
  position: absolute;
  height: 28px;
  width: 30px;
  top: 395px;
  left: 680px;

  @media (max-width: 600px){
    left: 72.3%;
    top: 67.05vh;
  }
`;

export const VisaInputs = styled.div`
display: flex;
flex-direction: row;
` 

export const Labelled = styled.section`
display: flex;
flex-direction: column;
gap: 10px;
padding-bottom: 20px;

input, select{
  width: 90%;
   border: 1px solid #d0d7de;
      background-color: #f6f8fa;
      border-radius: 5px;
      padding: 8px;
}

select{
  width: 40%;
}

label{
  color: #03453F;
  font-size: 14px;
  width: 100%;
}

@media (max-width: 600px){
.inputs{
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: -80px;

  input{
    width: 100%;
  }

  select{
    width: 100%;
  }
}
}

`