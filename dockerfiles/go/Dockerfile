FROM golang:1.15.2

RUN apt-get update && apt-get install -y wget protobuf-compiler
RUN go get -u github.com/cosmtrek/air
RUN go get -tags 'postgres' -u github.com/golang-migrate/migrate/cmd/migrate
RUN go get google.golang.org/protobuf/cmd/protoc-gen-go \
           google.golang.org/grpc/cmd/protoc-gen-go-grpc \
           github.com/mwitkow/go-proto-validators/protoc-gen-govalidators \
           github.com/fullstorydev/grpcurl/...

RUN go install github.com/fullstorydev/grpcurl/cmd/grpcurl

ENV PATH $PATH:$GOPATH/bin

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 8080

ADD ./app /go/src/github.com/highhi/sandbox-grpc-go-node/app

WORKDIR /go/src/github.com/highhi/sandbox-grpc-go-node/app
