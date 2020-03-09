import express, { Request, Response } from "express";
import { AddressInfo } from 'net'
import knex from 'knex';

const app = express();
app.use(express.json()); // Linha mágica (middleware)

const connection = knex({
	client: 'mysql',
	connection: {
		host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
		user: 'flavio',
		password: '7cM5u281ruMLANNAur1!',
		database: 'bouman-flavio'
	}
});

// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
	if (server) {
		const address = server.address() as AddressInfo;
		console.log(`Server is running in http://localhost:${address.port}`);
	} else {
		console.error(`Failure upon starting server.`);
	}
});


// códigos-projeto


//criar usuario
app.post('/createUser', (req: Request, res: Response) => {

	const getNickEmail = connection.select("nick", "email").from("_users")
	const nonQuery = connection.insert(req.body).into('_users')

	getNickEmail.then((result) => {
		let uniqueValues: boolean = true
		result.forEach((element) => {
			if (element.nick === req.body.nick || element.email === req.body.email) {
				uniqueValues = false
			}
		})

		if (uniqueValues) {
			nonQuery.then((result) => {
				res.send(`O usuario ${req.body.nick} foi criado`)
			})
		} else {
			res.send(`O usuario ${req.body.nick} ou email ${req.body.email} já cadastrado anteriormente`)
		}
	})
})

//alterar nick
app.post('/modifyNick', (req: Request, res: Response) => {

	const getNick = connection.select("nick").from("_users")
	const updateQuery = connection.where('nick', '=', req.body.old_nick).from("_users").update('nick', req.body.new_nick)

	getNick.then((result) => {
		let oneAtLeast: boolean = false
		result.forEach((element) => {
			if (element.nick === req.body.old_nick) {
				oneAtLeast = true
			}
		})

		if (oneAtLeast) {
			updateQuery.then((result) => {
				res.send(`O usuario ${req.body.old_nick} foi modificado para ${req.body.new_nick}`)
			})
		} else {
			res.send(`O usuario ${req.body.old_nick} não tem registro ainda, favor cadastra-lo.`)
		}
	})
})

//aapagar user
app.post('/deleteUser/:nickToDelete', (req: Request, res: Response) => {

	const hasPathString = Object.values(req.path).length > 0;
	const nickToDelete = req.params.nickToDelete
	const getNick = connection.select("nick").from("_users")
	const deleteQuery = connection.where('nick', '=', nickToDelete).from("_users").del()

	if (hasPathString) {
		getNick.then((result) => {
			let oneAtLeast: boolean = false
			result.forEach((element) => {
				if (element.nick === nickToDelete) {
					oneAtLeast = true
				}
			})
			if (oneAtLeast) {
				deleteQuery.then((result) => {
					res.send(`O usuario ${nickToDelete} foi deletado`)
				})
			} else {
				res.send(`O usuario ${nickToDelete} não existe, impossível deleta-lo.`)
			}
		})
	} else {
		res.send(`Insira um valor válido de parametro.`)
	}
})

// 4. Pegar usuário pelo nome ou pelo id
// getUser
app.get('/getUser/:userOrId', (req: Request, res: Response) => {

	const userOrIdToGet = req.params.userOrId
	const hasPathString = Object.values(req.path).length > 0;
	const getUserByNick = connection.select("*").from("_users").where("nick", userOrIdToGet)
	const getUserById = connection.select("*").from("_users").where("id_user", userOrIdToGet)
	if (hasPathString) {
		if (userOrIdToGet.match("[a-zA-Z]+")) {
			getUserByNick.then((result) => {
				res.send(result)
			})
		} else {
			getUserById.then((result) => {
				res.send(result)
			})
		}
	} else {
		res.send(`Insira um valor válido de parametro.`)
	}
});

// 5. Deve dar a possibilidade de ordenação de usuários alfabeticamente
//    Deve ser possível filtrar os usuários pela idade
// getAllUsers
app.get('/getAllUsers/:orderBy/:agedTo', (req: Request, res: Response) => {

	const orderBy = req.params.orderBy
	const agedTo = req.params.agedTo
	const hasPathString = Object.values(req.path).length > 0;
	const getAllUsers = connection.select("*").from("_users").orderBy("nick",orderBy).where("birth","<",agedTo)
	
	
	if (hasPathString) {
		getAllUsers.then((result) => {
			res.send(result)
		})	
	} else {
		res.send(`Insira um valor válido de parametro.`)
	}
});

// 6. Criar Tarefa
// - Devem ser passadas todas as informações básicas para a criação de uma tarefa
// - O usuário pedinte deve ser passado somente através do id
// - Não é obrigatório indicar um usuário responsável no momento da criação

app.post('/createTask', (req: Request, res: Response) => {

	const getId = connection.select("id").from("_users")
	const postTaskQuery = connection.insert(req.body).into('_tasks')
	
	getId.then((result) => {
		let oneAtLeastRequest: Boolean = false
		let oneAtLeastResponsible: Boolean = false
		// percebi aqui que era interessante que não fosse apagado o usuario, no endpoit de delete user, mas só criar uma cluna com dados de Ativo e Inativo.
		result.forEach((element) => {
			if (element.id == req.body.id_requester) {
				oneAtLeastRequest = true
			}
			if (element.id == req.body.id_responsible || req.body.id_responsible === null) {
				oneAtLeastResponsible = true
			}
		})
		if (oneAtLeastRequest && oneAtLeastResponsible) {
			postTaskQuery.then((result) => {
				res.send(`Tarefa cadastrada com sucesso.`)
			}).catch((err) => {
				res.status(err)
			})
		} else {
			res.send(`id responsável ${req.body.id_responsible}, ou id do requisitante ${req.body.id_requester} não está presente no banco de dados. Favor cadastrá-lo primeiro.`)
		}
	})
})

//- **7. Editar informações básicas de uma tarefa**
//- Editar a descrição e a data limite
app.post('/updateTask', (req: Request, res: Response) => {

	const getTask = connection.select("id_task").from("_tasks")
	const updateQuery = connection.where('id_task', '=', req.body.id_task).from("_tasks").update({'descr':req.body.descr, 'limit_date':req.body.limit_date} )

	getTask.then((result) => {
		let oneAtLeast: boolean = false
		result.forEach((element) => {
			if (element.id_task === req.body.id_task) {
				oneAtLeast = true
			}
		})
		if (oneAtLeast) {
			updateQuery.then((result) => {
				res.send(`A tarefa foi atualizada}`)
			}).catch((err) => {
				res.send(err)
			})
		} else {
			res.send(`A tarefa ${req.body.id_task} não tem registro ainda, favor registra-la.`)
		}
	}).catch((err) => {
		res.send(err)
	})
})

// - **8. Atribuir responsável a uma tarefa**
//     - Devem ser informados ao endpoint somente o id da tarefa e do usuário
app.post('/updateTaskResponsible', (req: Request, res: Response) => {

	const getTask = connection.select("id_task","id_responsible").from("_tasks")
	const updateQuery = connection.where('id_task', '=', req.body.id_task).from("_tasks").update({'id_responsible':req.body.id_responsible} )

	getTask.then((result) => {
		let oneAtLeast: boolean = false
		result.forEach((element) => {
			if (element.id_task === req.body.id_task && element.id_responsible === null) {
				oneAtLeast = true
			}
		})
		if (oneAtLeast) {
			updateQuery.then((result) => {
				res.send(`A tarefa foi atualizada}`)
			}).catch((err) => {
				res.send(err)
			})
		} else {
			res.send(`A tarefa ${req.body.id_task} não tem registro ainda ou, a tarefa já possui alguém associado como responsável.`)
		}
	}).catch((err) => {
		res.send(err)
	})
})



// - **9. Pegar tarefas criadas por um usuário**

app.get('/getTaskByUserRequested/:requesterId/:agedTo', (req: Request, res: Response) => {

	const requesterId = req.params.requesterId
	const agedTo = req.params.agedTo
	const hasPathString = Object.values(req.path).length > 0;
	const getTaskByUser = connection.raw(`SELECT * FROM _tasks WHERE limit_date < ${agedTo} AND id_requester = ${requesterId}`)
	
	if (hasPathString) {
		getTaskByUser.then((result) => {
			res.send(result)
		}).catch((err) => {
			res.send(err)
		})	
	} else {
		res.send(`Insira um usuário válido.`)
	}
});
//**10. Pegar tarefas atribuídas a um usuário**
//    - Devem ser informado, ao endpoint, o id do usuário
 //   - Deve ser possível filtrar as tarefas por data limite

 app.get('/getTaskByUserResponsible/:responsibleId/:agedTo', (req: Request, res: Response) => {

	const responsibleId = req.params.responsibleId
	const agedTo = req.params.agedTo
	const hasPathString = Object.values(req.path).length > 0;
	const getTaskByUser = connection.raw(`SELECT * FROM _tasks WHERE limit_date < ${agedTo} AND id_responsible = ${responsibleId}`)
	

	if (hasPathString) {
		getTaskByUser.then((result) => {
			res.send(result)
		}).catch((err) => {
			res.send(err)
		})	
	} else {
		res.send(`Insira um usuário válido.`)
	}
});

app.get('/getAllTasks/:agedTo/:orderBy', (req: Request, res: Response) => {

	const orderBy = req.params.orderBy
	const agedTo = req.params.agedTo
	const hasPathString = Object.values(req.path).length > 0;
	const getAllTasks = connection.raw(
		`select name, descr, limit_date from _users u inner join _tasks t1 on u.id = t1.id_requester where limit_date < ${agedTo} order by ${orderBy} asc ;`)
	

	if (hasPathString) {
		getAllTasks.then((result) => {
			res.send(result)
		}).catch((err) => {
			res.send(err)
		})	
	} else {
		res.send(`Insira um usuário válido.`)
	}
});