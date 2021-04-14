# Makefile
COMMAND=docker-compose exec app protoc --go_out=./protobuf --go_opt=paths=source_relative --go-grpc_out=./protobuf --go-grpc_opt=paths=source_relative --proto_path=./proto ./proto/*.proto

.PHONY: protogen
protogen:
		rm -rf ./protobuf && mkdir -p ./protobuf
		$(COMMAND)

.PHONY: health
health:
		docker-compose exec app grpcurl -plaintext localhost:8080 Health.Check