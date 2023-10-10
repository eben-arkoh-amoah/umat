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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 20px;


  .payment{
    @media (max-width: 600px){
      width: 131.5%;
      justify-content: flex-start;
      display: flex;
      flex-direction: row;
      margin-bottom: 20px;
    
    .option{
      width: 150%;
      padding-left: 10px;
    }

    }

  fieldset {
    display: flex;
    font-size: 15px;
  }

    label {
      width: 150%;
    }

    .option{
      color: #03453F;
      font-weight: bold;
      font-size: 14px;
      margin-right: 70px;
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
  margin-left: -10px;
  align-items: center;

  label{
  width: 500%;
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
  width: 200px;
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