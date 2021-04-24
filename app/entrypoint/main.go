package main

import (
	"flag"
	"log"
	"net"

	grpc_middleware "github.com/grpc-ecosystem/go-grpc-middleware"
	grpc_zap "github.com/grpc-ecosystem/go-grpc-middleware/logging/zap"
	"github.com/highhi/sandbox-grpc-go-node/app/config"
	"github.com/highhi/sandbox-grpc-go-node/app/handler"
	"github.com/highhi/sandbox-grpc-go-node/app/infra/persistence"
	"go.uber.org/zap"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func main() {
	m := flag.String("mode", "local", "environment, dev or prod or ...")
	flag.Parse()
	config.Conf = config.NewConfig(*m)

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

	handler.Initialize(s, persistence.NewDB())

	log.Println("server start!")

	reflection.Register(s)

	if err = s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
