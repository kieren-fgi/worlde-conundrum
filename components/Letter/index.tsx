const Letter = ({ value, index, keyPress }: any) => {
	return (
		<button
			className="key"
			key={`keyboard-button-${index}`}
			data-key={value}
			onClick={() => keyPress(value)}
		>
			{value}
		</button>
	);
};

export default Letter;

// look into passing funcstions through components
