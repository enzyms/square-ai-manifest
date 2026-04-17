export interface ManifestPrinciple {
	number: number;
	headline: { bold: string; rest: string };
	points: string[];
}

export const manifest: ManifestPrinciple[] = [
	{
		number: 1,
		headline: { bold: 'Mental health', rest: 'first' },
		points: [
			'Control the acceleration, do not endure it.',
			'Watch out of context switching, job intensification, AI burnout.'
		]
	},
	{
		number: 2,
		headline: { bold: 'AI is only', rest: 'a tool' },
		points: [
			"Don't loose ourselves.",
			'Be aware of fascination and hype.',
		]
	},
	{
		number: 3,
		headline: { bold: 'Play', rest: 'collective' },
		points: [
			'Talk together, design together, code together.', 
			'Sharing is caring, communication is key.', 
		]
	},
	{
		number: 4,
		headline: { bold: "Don't", rest: 'get lazy' },
		points: [
			'Keep your expertise sharp.',
			'Keep a critical point of view.',
		]
	},
	{
		number: 5,
		headline: { bold: 'Keep it', rest: 'open' },
		points: [
			'“Open over Claude” Ethics',
			'Project setup must work for everyone.']
	},
	{
		number: 6,
		headline: { bold: 'Human', rest: 'in the loop' },
		points: [
			'Avoid reviews from hell.',
			'You ask your LLM, you are accountable.'
		]
	},
	{
		number: 7,
		headline: { bold: 'Security, ', rest: 'sovereignty' },
		points: [
			'Give access to the necessary data and systems only.',
		]
	},
	{
		number: 8,
		headline: { bold: 'Be', rest: 'frugal' },
		points: [
			'Master your context, choose your LLM wisely.',
			'Prompt only when it makes sense.'
		]
	}
];
