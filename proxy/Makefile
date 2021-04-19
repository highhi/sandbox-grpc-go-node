OUTPUT=./src/protobuf
NPM_BIN=./node_modules/.bin
GRPC_TOOL=$(NPM_BIN)/grpc_tools_node_protoc
TYPESCRIPT_PLUGIN=protoc-gen-ts=$(NPM_BIN)/protoc-gen-ts

COMMAND=$(GRPC_TOOL) --plugin=${TYPESCRIPT_PLUGIN} --js_out=import_style=commonjs,binary:${OUTPUT} --grpc_out=grpc_js:${OUTPUT} --ts_out=grpc_js:${OUTPUT} --proto_path=../app/proto ../app/proto/*.proto

.PHONY: protogen
protogen:
	rm -rf ${OUTPUT} && mkdir -p ${OUTPUT}
	# generate js and .d.ts codes via grpc-tools
	$(COMMAND)