package handler

import (
	"context"

	pb "github.com/highhi/sandbox-grpc-go-node/app/protobuf"
)

type greeterHandler struct {
	pb.UnimplementedGreeterServer
}

func newGreeterHandler() *greeterHandler {
	return &greeterHandler{}
}

func (h *greeterHandler) SayHello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloReply, error) {
	return &pb.HelloReply{Message: "Hello again"}, nil
}
