const fs = require('fs');
const fileName  = "users.json";

try{
	const fileContent = fs.readFileSync(fileName);
	const fileContentAsString = fileContent.toString();
	const fileContentAsObject = JSON.parse(fileContentAsString);

	fileContentAsObject.forEach((user) => {
		console.log(user.username,"-",user.email)
	})
	console.log("Existem, ", fileContentAsObject.length," usuarios")

}catch(e){
	console.error(e);
}
