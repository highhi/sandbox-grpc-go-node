# Makefile
COMMAND=protoc \
	--go_out=./pb \
	--go_opt=paths=source_relative \
	--go-grpc_out=./pb \
	--go-grpc_opt=paths=source_relative \
	--proto_path=${GOPATH}/src \
	--proto_path=./proto \
	./proto/*.proto

.PHONY: protogen
protogen:
		rm -rf ./pb && mkdir -p ./pb
		$(COMMAND)

.PHONY: health
health:
		docker-compose exec app grpcurl -plaintext localhost:8080 Health.Check