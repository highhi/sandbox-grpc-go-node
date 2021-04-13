# Makefile
COMMAND=docker-compose exec app protoc --go_out=./proto --go_opt=paths=source_relative --go-grpc_out=./proto --go-grpc_opt=paths=source_relative --proto_path=./proto ./proto/*.proto

.PHONY: protogen
protogen:
		$(COMMAND)

.PHONY: health
health:
		docker-compose exec app grpcurl -plaintext -d '{ "name": "world" }' localhost:8080 Greeter.SayHello