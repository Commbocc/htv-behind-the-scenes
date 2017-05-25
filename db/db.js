const Faker = require('faker')

module.exports = () => {

	const data = {
		projects: [],
		ccms: [],
		project_ccms: [],
	}

	for (i = 0; i < 10; i++) {
		data.projects.push({
			id: i+1,
			title: Faker.commerce.productName(),
			image: Faker.image.imageUrl(345, 510, '', true),
			embed: '',
			directorId: Math.floor((Math.random() * 100) + 1),
			producerId: Math.floor((Math.random() * 100) + 1),
			writerId: Math.floor((Math.random() * 100) + 1),
			runtime: '122 mins',
			created_at: Faker.date.past(),
			synopsis: Faker.lorem.paragraphs()
		})
	}

	for (i = 0; i < 100; i++) {
		var card = Faker.helpers.userCard()
		card.id = i+1
		card.avatar = Faker.image.avatar()
		data.ccms.push( card )
	}

	for (i = 0; i < 50; i++) {
		data.project_ccms.push({
			projectId: Math.floor((Math.random() * 10) + 1),
			ccmId: Math.floor((Math.random() * 100) + 1),
			role: Faker.name.jobTitle()
		})
	}

	return data
}
