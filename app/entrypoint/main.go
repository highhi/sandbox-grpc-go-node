package main

import (
	"context"
	"log"
	"net"

	grpc_middleware "github.com/grpc-ecosystem/go-grpc-middleware"
	grpc_zap "github.com/grpc-ecosystem/go-grpc-middleware/logging/zap"
	pb "github.com/highhi/grpc-go/app/protobuf"
	"go.uber.org/zap"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

type greeterServer struct {
	pb.UnimplementedGreeterServer
}

type healthServer struct {
	pb.UnimplementedHealthServer
}

func (s *greeterServer) SayHello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloReply, error) {
	return &pb.HelloReply{Message: "Hello again"}, nil
}

func (s *healthServer) Check(ctx context.Context, in *pb.HealthRequest) (*pb.HealthReply, error) {
	return &pb.HealthReply{Message: "OK"}, nil
}

func main() {
	lis, err := net.Listen("tcp", ":8080")

	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	zapLogger, err := zap.NewProduction()

	if err != nil {
		panic(err)
	}

	s := grpc.NewServer(grpc.UnaryInterceptor(
		grpc_middleware.ChainUnaryServer(
			grpc_zap.UnaryServerInterceptor(zapLogger),
		),
	))

	pb.RegisterGreeterServer(s, &greeterServer{})
	pb.RegisterHealthServer(s, &healthServer{})

	log.Println("起動")

	reflection.Register(s)

	if err = s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
