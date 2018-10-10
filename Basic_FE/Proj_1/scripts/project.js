// 
// Project object
const Project = {
	title: String,
	description: String,
	steps: [
		{
			task: String,
			status: Boolean = false
		}
	],
	creator: String,
	created: new Date(),
	due: new Date(),
	progress: function() {
		const completed = this.steps.reduce((acc, cur) => {
			return acc + cur.status;
		}, 0);
		return formatTwoDecimals(completed / this.steps.length);
	}
}
