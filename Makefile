COMPONENT = paseoperrosen

ENV := development

# Containers
CONTAINER = $$(docker ps | grep ${COMPONENT} | awk '{print $$1}')
DOCKER_COMPOSE := --env-file .env -p ${COMPONENT} -f ops/docker/docker-compose.yml

## Builds the container image
build: copy-env build-docker start

build-docker:
	@docker-compose ${DOCKER_COMPOSE} up -d --build

copy-env:
	@sh ops/scripts/copy-environment.sh ${ENV}

## Starts the container
start:
	@docker-compose ${DOCKER_COMPOSE} up -d

## Stops the container
stop: is-running
	@docker-compose ${DOCKER_COMPOSE} stop

## Restart the container
restart: stop start

## Attach shell to the container that is running
enter: is-running
	@docker exec -it ${CONTAINER} /bin/bash

## Check javascript formatting errors
prettier: is-running
	@docker exec -it ${CONTAINER} yarn format

## Check javascript formatting errors
lint: is-running
	@docker exec -it ${CONTAINER} yarn lint

## Fix javascript formatting errors
lint-fix: is-running
	@docker exec -it ${CONTAINER} yarn lint:fix

yarn-build:
	@docker exec -it ${CONTAINER} yarn build

## It builds the static site in the folder "out"
yarn-export:
	@docker exec -it ${CONTAINER} yarn export

## Check if the container is running
is-running:
	@docker exec ${CONTAINER} true 2>/dev/null || (echo "Docker container is not running - Please execute ---> make start <--- to start it"; exit 1)

# COLORS
GREEN  := $(shell tput -Txterm setaf 2)
YELLOW := $(shell tput -Txterm setaf 3)
WHITE  := $(shell tput -Txterm setaf 7)
RESET  := $(shell tput -Txterm sgr0)

TARGET_MAX_CHAR_NUM=20
## Show help
help:
	@echo ''
	@echo 'Usage:'
	@echo '  ${YELLOW}make${RESET} ${GREEN}<target>${RESET}'
	@echo ''
	@echo 'Targets:'
	@awk '/^[a-zA-Z\-\_0-9]+:/ { \
		helpMessage = match(lastLine, /^## (.*)/); \
		if (helpMessage) { \
			helpCommand = substr($$1, 0, index($$1, ":")-1); \
			helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
			printf "  ${YELLOW}%-$(TARGET_MAX_CHAR_NUM)s${RESET} ${GREEN}%s${RESET}\n", helpCommand, helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)
