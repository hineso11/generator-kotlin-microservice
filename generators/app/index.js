var Generator = require('yeoman-generator');

module.exports = class extends Generator {

	constructor(args, opts) {
		super(args, opts);
	}

	async prompting() {

		this.basicInformation = await this.prompt(
			[
				{
					type: "input",
					name: "serviceName",
					message: "The name of your service",
					default: this.appname
				}
			]
		);
	}

	writing() {
		// Template all docker compose files
		this.fs.copyTpl(this.templatePath('docker-compose*.yml'), this.destinationPath(), {

			databaseName: this.basicInformation.serviceName,
			serviceName: this.basicInformation.serviceName
		});
		// Template the Makefile
		this.fs.copyTpl(this.templatePath('Makefile'), this.destinationPath('Makefile'), {

			composeProjectName: this.basicInformation.serviceName,
			serviceName: this.basicInformation.serviceName
		});
  }
};