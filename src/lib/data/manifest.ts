export interface ManifestPrinciple {
	id: string;
	headline: { bold: string; rest: string };
	points: string[];
}

export const manifest: ManifestPrinciple[] = [
	{
		id: 'mental-health',
		headline: { bold: 'Mental health', rest: 'first' },
		points: [
			'Control the acceleration, do not endure it.',
			'Watch out for context switching, job intensification, AI burnout.'
		]
	},
	{
		id: 'tool',
		headline: { bold: 'AI is only', rest: 'a tool' },
		points: [
			"Don't lose ourselves.",
			'Be aware of fascination and hype.'
		]
	},
	{
		id: 'collective',
		headline: { bold: 'Play', rest: 'collective' },
		points: [
			'Talk together, design together, code together.',
			'Help your colleague who feels left behind.'
		]
	},
	{
		id: 'open',
		headline: { bold: 'Keep it', rest: 'open' },
		points: [
			'"Open over Claude" ethics',
			'Project setup must work for everyone.'
		]
	},
	{
		id: 'lazy',
		headline: { bold: "Don't", rest: 'get lazy' },
		points: [
			'Keep your expertise sharp.',
			'Keep your critical point of view.'
		]
	},
	{
		id: 'human-loop',
		headline: { bold: 'Human', rest: 'in the loop' },
		points: [
			'Avoid reviews from hell.',
			'You ask your LLM, you are accountable.'
		]
	},
	{
		id: 'sovereignty',
		headline: { bold: 'Sovereignty', rest: 'at the centre' },
		points: [
			'Own your data.',
			'Expose them responsibly.'
		]
	},
	{
		id: 'security',
		headline: { bold: 'Security', rest: 'all around' },
		points: [
			'Give access to the necessary systems only.',
			'Treat every prompt as a potential leak.'
		]
	},
	{
		id: 'frugal',
		headline: { bold: 'Be', rest: 'frugal' },
		points: [
			'Master your context, choose your LLM wisely.',
			'Prompt only when it makes sense.'
		]
	}
];
