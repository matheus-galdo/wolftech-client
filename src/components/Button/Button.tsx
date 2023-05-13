import React from "react";
import './style.scss';

type ButtonProps = {
    children?: string | JSX.Element | JSX.Element[];
    onClick?: (event: React.MouseEvent) => void;
}

export function Button({ children, onClick }: ButtonProps) {
    return <button className="main-button" {...{ onClick }}>
        {children}
    </button>
}

export function SecondaryButton({ children, onClick }: ButtonProps) {
    return <button className="secondary-button" {...{ onClick }}>
        {children}
    </button>
}