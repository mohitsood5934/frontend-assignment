import React from "react";
import PropTypes from "prop-types";
import '../../css/Button.css';

const Button = (props) => {
    const { className = '', btnText = '', disabled = false, btnClickHandler } = props;

    return (
        <button
            className={className}
            disabled={disabled}
            onClick={btnClickHandler}
            aria-disabled={disabled ? "true" : "false"}
        >
            {btnText}
        </button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    btnText: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    btnClickHandler: PropTypes.func,
}

export default Button;