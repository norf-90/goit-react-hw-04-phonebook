import { Formik, ErrorMessage } from 'formik';
import {
  Form,
  Label,
  InputTitle,
  Field,
  SubmitBtn,
  Wrapper,
} from './ContactForm.styled';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .required()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(3, 'Must be more 3 digits'),
});

const ContactForm = ({ handleSubmit }) => {
  const initialValues = { number: '', name: '' };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label>
          <InputTitle>Name</InputTitle>
          <Wrapper>
            <Field
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Brendan Eich"
              required
            />
            <ErrorMessage name="name" />
          </Wrapper>
        </Label>

        <Label>
          <InputTitle>Number</InputTitle>
          <Wrapper>
            <Field
              type="tel"
              name="number"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="063-111-22-33"
            />
            <ErrorMessage name="number" />
          </Wrapper>
        </Label>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = { handleSubmit: PropTypes.func.isRequired };

export default ContactForm;
