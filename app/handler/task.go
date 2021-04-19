package handler

import (
	"context"
	"time"

	"github.com/highhi/sandbox-grpc-go-node/app/infra/persistence"
	pb "github.com/highhi/sandbox-grpc-go-node/app/protobuf"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type taskHandler struct {
	r *persistence.TaskRepository
	pb.UnimplementedTasksServer
}

func newTaskHandler(r *persistence.TaskRepository) *taskHandler {
	return &taskHandler{r: r}
}

func (h *taskHandler) CreateTask(ctx context.Context, in *pb.CreateTaskRequest) (*pb.CreateTaskReply, error) {
	now := timestamppb.New(time.Now())

	err := h.r.Create(pb.Task{
		Uid:       in.GetUid(),
		Title:     in.GetTitle(),
		Content:   in.GetContent(),
		CreatedAt: now,
		UpdatedAt: now,
	})

	if err != nil {
		return nil, err
	}

	return &pb.CreateTaskReply{}, nil
}

func (h *taskHandler) GetTasks(ctx context.Context, in *pb.GetTasksRequest) (*pb.GetTasksReply, error) {
	tasks, err := h.r.List(in.GetUid())
	if err != nil {
		return nil, err
	}
	return &pb.GetTasksReply{Tasks: tasks}, nil
}
