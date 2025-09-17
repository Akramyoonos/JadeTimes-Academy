import React from 'react';

export default function CheckboxFilter({ label, isChecked, onChange }) {
  return (
    <label className="flex items-center space-x-2 text-sm text-gray-700 my-2">
      <input
        type="checkbox"
        className="rounded border-gray-300 text-blue-600 shadow-sm
                   focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        checked={isChecked}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
}
