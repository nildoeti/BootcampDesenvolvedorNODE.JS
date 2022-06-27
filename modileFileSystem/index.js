// ler um arquivo readFile()
// criar arquivo appendFile() se não existir, se não adicionado o conteúdo
// sobrescreve um arquivo whiteFile() se existir, se não será criado
// apagar um arquivo unlink()
// renomear um arquivo rename()

var fs = require('fs');
fs.readFile('./test-file.txt', 'utf-8', function ( err, data) {
	// body...
	if ( err ) {
		console.log(err.message);
	} else {
		console.log(data);
	}
});