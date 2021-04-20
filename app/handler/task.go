package handler

import (
	"context"
	"time"

	"github.com/highhi/sandbox-grpc-go-node/app/domain/task"
	"github.com/highhi/sandbox-grpc-go-node/app/infra/persistence"
	pb "github.com/highhi/sandbox-grpc-go-node/app/protobuf"
)

type taskHandler struct {
	r *persistence.TaskRepository
	pb.UnimplementedTasksServer
}

func newTaskHandler(r *persistence.TaskRepository) *taskHandler {
	return &taskHandler{r: r}
}

func (h *taskHandler) CreateTask(ctx context.Context, in *pb.CreateTaskRequest) (*pb.CreateTaskReply, error) {
	now := time.Now()

	err := h.r.Create(task.Task{
		UID:       in.GetUid(),
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
	return &pb.GetTasksReply{Tasks: task.ToPBList(tasks)}, nil
}
