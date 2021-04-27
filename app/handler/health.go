package handler

import (
	"context"

	pb "github.com/highhi/sandbox-grpc-go-node/app/pb"
)

type healthHandler struct {
	pb.UnimplementedHealthServer
}

func newHealthHandler() *healthHandler {
	return &healthHandler{}
}

func (s *healthHandler) Check(ctx context.Context, in *pb.HealthRequest) (*pb.HealthReply, error) {
	return &pb.HealthReply{Message: "OK"}, nil
}
