export default function Selectbox({
    className = "",
    option = [],
    currentValue = "",
    ...props
}) {
    return (
        <select
            {...props}
            defaultValue={currentValue}
            className={
                "border-grey-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full" +
                className
            }
        >
            {option.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
