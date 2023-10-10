  import React from 'react';
  import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
  import * as Yup from 'yup';
  import styled from 'styled-components';

  const FormContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
    align-items: center;
    width: 90%;
     
   div{
    display: flex;
    flex-direction: column !important;
    gap: 10px !important;
   }

   .tel{
    flex-direction: column;
   }
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    ::placeholder {
      color: #24292f;
      font-weight: regular;
    }
  `;

  const Label = styled.label`
    color: #24292f;
    font-weight: lighter;
    font-size: 14px;
  `;

  const InputField = styled(Field)<{ hasError?: boolean; width?: string }>`
    width: ${({ width }) => width || '70%'};
    padding: 8px;
    background-color: #f6f8fa;
    border-radius: 5px;
    margin-top: -5px;
  `;

export const Tel = styled.div`
  display: flex;
  flex-direction: row !important;
  with: 100%;
      img {
        height: 25px;
        width: 35px;
      }

  `

  const ErrorMessageStyled = styled(ErrorMessage)`
    color: red;
    font-size: 12px;
    font-weight: 200;
    margin: 2px 0;
  `;

  const initialValues = {
    textInput: '',
    emailInput: '',
    phoneInput: '',
  };

  const validationSchema = Yup.object().shape({
    textInput: Yup.string().required('This field is required'),
    emailInput: Yup.string().email('Invalid email address').required('This field is required'),
    phoneInput: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('This field is required'),
  });

  export interface InputParameters {
    label: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'tel';
    id: string;
    width?: string;
    src?: string;
  }

  function Input({ label, placeholder, type, id, width, src }: InputParameters) {
    const handleSubmit = (values: typeof initialValues, { setSubmitting }: FormikHelpers<typeof initialValues>) => {
      console.log(values);
      setSubmitting(false);
    };

    return (
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ touched, setFieldTouched }) => (
          <FormContainer>
            {type === 'text' ? (
              <div>
                <Label htmlFor={id}>{label}</Label>
                <InputField
                  type="text"
                  name="textInput"
                  onBlur={() => setFieldTouched('textInput')}
                  id={id}
                  placeholder={placeholder}
                  width={width}
                />
                {touched.textInput && <ErrorMessageStyled name="textInput" component="div" />}
              </div>
            ) : type === 'email' ? (
              <div>
                <Label htmlFor={id}>{label}</Label>
                <InputField
                  id={id}
                  placeholder={placeholder}
                  width={width}
                  type="email"
                  name="emailInput"
                  onBlur={() => setFieldTouched('emailInput')}
                />
                {touched.emailInput && <ErrorMessageStyled name="emailInput" component="div" />}
              </div>
            ) : (
              <div className='tel'>
                <Label htmlFor={id}>{label}</Label>
                <Tel className={src ? 'iconified' : ''}>
                  {src && <img src={src} alt={label} />}
                  <InputField
                    id={id}
                    placeholder={placeholder}
                    width={width}
                    type="tel"
                    name="phoneInput"
                    onBlur={() => setFieldTouched('phoneInput')}
                  />
                </Tel>
                {touched.phoneInput && <ErrorMessageStyled name="phoneInput" component="div" />}
              </div>
            )}
          </FormContainer>
        )}
      </Formik>
    );
  }

  export default Input;
