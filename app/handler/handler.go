package handler

import (
	"github.com/highhi/grpc-go/app/infra/persistence"
	pb "github.com/highhi/grpc-go/app/protobuf"
	"github.com/jmoiron/sqlx"
	"google.golang.org/grpc"
)

func Initialize(s *grpc.Server, db *sqlx.DB) {
	pb.RegisterHealthServer(s, newHealthHandler())
	pb.RegisterGreeterServer(s, newGreeterHandler())
	pb.RegisterTasksServer(s, newTaskHandler(persistence.NewTaskRepository(db)))
}
