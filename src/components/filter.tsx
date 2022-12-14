interface Props {
    name: string;
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const Filter = ({ name, filter, setFilter }: Props) => {
    return (
        <button
            className={`font-bold ${filter === name.toLowerCase()
                    ? 'text-bright-blue'
                    : 'text-light-gray-blue-300 dark:text-dark-gray-blue-200 hover:text-dark-gray-blue-300 dark:hover:text-white'
                }`}
            value={name.toLowerCase()}
            onClick={e => {
                setFilter(e.currentTarget.value);
            }}
        >
            {name}
        </button>
    );
};