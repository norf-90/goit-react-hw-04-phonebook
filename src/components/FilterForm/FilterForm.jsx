import { Formik } from 'formik';
import { Field } from './FilterForm.styled';
import PropTypes from 'prop-types';

const FilterForm = ({ onChange }) => {
  return (
    <Formik>
      <Field name="filter" onChange={onChange} />
    </Formik>
  );
};

FilterForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FilterForm;
