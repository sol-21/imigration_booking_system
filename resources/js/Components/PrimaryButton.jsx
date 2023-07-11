export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `btn btn-outline-primary ${disabled && "opacity-25"} ` +
                className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
