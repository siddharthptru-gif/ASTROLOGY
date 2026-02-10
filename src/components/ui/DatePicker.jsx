import React from 'react';
import Input from './Input';

/**
 * 📅 DatePicker
 * Wrapper for native date input with custom styling.
 */
const DatePicker = ({ label, value, onChange, error, ...props }) => {
  return (
    <Input
      type="date"
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      className="[&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-50"
      {...props}
    />
  );
};

export default DatePicker;
