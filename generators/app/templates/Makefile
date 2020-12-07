BASE_COMPOSE_FILE = docker-compose.yml
DEV_COMPOSE_FILE = docker-compose.dev.yml
############################################
# Targets for spinning up whole system
start: export COMPOSE_PROJECT_NAME = <%= composeProjectName %>
start: stop
	docker-compose -f $(BASE_COMPOSE_FILE) -f $(DEV_COMPOSE_FILE) up --build $(services)

stop:
	docker-compose -f $(BASE_COMPOSE_FILE) -f $(DEV_COMPOSE_FILE) down --remove-orphans

############################################
build:
	docker build ./ -f ./Dockerfile --target prod -t $(tag)
