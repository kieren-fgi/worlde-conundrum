'use client';

import { Keyboard, Letter } from '@/components';
import { useState } from 'react';

export default function Home() {
	const [word, setWord] = useState<string>('advicate');
	const alphabet: any = 'qwertyuiopasdfghjklzxcvbnm'.split('');
	console.log(alphabet);
	const keyPress = (key: any) => {
		console.log(key);
	};
	const jumbleWord = (word: string) => {
		return word;
	};
	return (
		<div className="flex flex-col items-center justify-between p-24">
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono">
				<h1 className="font-bold text-center text-[40px]">
					{jumbleWord(word)}
				</h1>
			</div>

			<div className="flex flex-row space-x-5 items-center align-middle py-12">
				<div className="wordTile">
					<p>T</p>
				</div>
				<div className="wordTile">
					<p>V</p>
				</div>
				<div className="wordTile">
					<p>I</p>
				</div>
				<div className="wordTile">
					<p>A</p>
				</div>
				<div className="wordTile">
					<p>D</p>
				</div>
				<div className="wordTile">
					<p>T</p>
				</div>
				<div className="wordTile">
					<p>E</p>
				</div>
				<div className="wordTile">
					<p>C</p>
				</div>
				<div className="wordTile">
					<p>A</p>
				</div>
			</div>
			<Keyboard keyPress={keyPress} alphabet={alphabet} />
		</div>
	);
}
