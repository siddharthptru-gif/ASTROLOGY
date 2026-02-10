import React from 'react';
import Input from './Input';

/**
 * ⏰ TimePicker
 * Wrapper for native time input with custom styling.
 */
const TimePicker = ({ label, value, onChange, error, ...props }) => {
  return (
    <Input
      type="time"
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      className="[&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-50"
      {...props}
    />
  );
};

export default TimePicker;
