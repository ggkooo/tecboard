export function EventFormFieldLabel({children, htmlFor}) {
    return (
        <label htmlFor={htmlFor}>
            {children}
        </label>
    )
}