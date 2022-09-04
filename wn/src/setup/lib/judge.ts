//判断
function judge(name:any,value:any):boolean {
	return name === value;
}

function isBoolJudge(name:boolean) {
	return judge(name, true);
}
function unBoolJudge() {
	return judge(null, false);
}



export {
	judge,
	isBoolJudge,
	unBoolJudge,
}