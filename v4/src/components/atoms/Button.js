import React from "react";

function Button(props) {
  const styleClass = props.variant && props.variant !== "secondary" ? "cta cta-primary" : "cta cta-secondary";
  const styles = `
                button {
                    padding: 10px 30px;
                }
                button:disabled {
                  color: #ccc;
                }
            `;

  return (
    <div>
      <button className={styleClass} onClick={props.onClick} disabled={props.disabled}>
        {props.children}
      </button>
      <style jsx>{styles}</style>
    </div>
  );
}
export default Button;
