# Makefile

NPM_BIN=./node_modules/.bin
GRPC_TOOL=$(NPM_BIN)/grpc_tools_node_protoc
TYPESCRIPT_PLUGIN=protoc-gen-ts=$(NPM_BIN)/protoc-gen-ts

COMMAND=$(GRPC_TOOL) --plugin=${TYPESCRIPT_PLUGIN} --js_out=import_style=commonjs,binary:./ --grpc_out=grpc_js:./ --ts_out=grpc_js:./ --proto_path=../app ../app/proto/*.proto

.PHONY: protogen
protogen:
	rm -rf ./proto && mkdir -p ./proto
	# generate js and .d.ts codes via grpc-tools
	$(COMMAND)