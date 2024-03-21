export default function Selectbox({
    className = "",
    option = [],
    currentValue = "",
    setData, // Tambahkan prop setData untuk mengubah nilai data
    ...props
}) {
    const handleChange = (e) => {
        setData('role', e.target.value); // Ubah nilai 'role' pada data
    };

    return (
        <select
            {...props}
            className={
                "border-grey-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full" +
                className
            }
            value={currentValue} // Gunakan properti value untuk menentukan nilai dropdown
            onChange={handleChange} // Tambahkan event handler untuk memperbarui nilai 'role' saat dropdown berubah
        >
            {option.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
