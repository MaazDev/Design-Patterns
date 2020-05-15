class BuilderPattern {

	getName() {
		return 'all is gopd dd';
	}

	constructor(
		public name,
		public options?: { name: string, age: number, sports: string }
	) {
	}

}

const test = new BuilderPattern('jean', { name: 'jean', age: 23, sports: 'foot' });
