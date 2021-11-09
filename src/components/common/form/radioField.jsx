import React from "react";
import PropTypes from "prop-types";

const RadioField = ({ options, label, name, value, onChange }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>
            <div>
                {options.map((option) => (
                    <div
                        className="form-check form-check-inline"
                        key={option.name + "_" + option.value}
                    >
                        <input
                            className="form-check-input"
                            type="radio"
                            name={name}
                            checked={option.value === value}
                            id={option.name + "_" + option.value}
                            value={option.value}
                            onChange={handleChange}
                        />
                        <label
                            className="form-check-label"
                            htmlFor={option.name + "_" + option.value}
                        >
                            {option.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

RadioField.propTypes = {
    options: PropTypes.array,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default RadioField;