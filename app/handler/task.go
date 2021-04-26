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

	err := h.r.Create(&task.Task{
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

func (h *taskHandler) GetTaskList(ctx context.Context, in *pb.GetTaskListRequest) (*pb.GetTaskListReply, error) {
	tasks, err := h.r.List(in.GetUid())
	if err != nil {
		return nil, err
	}
	return &pb.GetTaskListReply{Tasks: task.ToPBList(tasks)}, nil
}

func (h *taskHandler) GetTask(ctx context.Context, in *pb.GetTaskRequest) (*pb.GetTaskReply, error) {
	task, err := h.r.GetById(in.GetUID(), in.GetID())
	if err != nil {
		return nil, err
	}
	return &pb.GetTaskReply{Task: task.ToPB()}, nil
}

func (h *taskHandler) UpdateTask(ctx context.Context, in *pb.UpdateTaskRequest) (*pb.UpdateTaskReply, error) {
	task, err := h.r.GetById(in.GetUID(), in.GetID())

	if err != nil {
		return nil, err
	}

	task.Title = in.GetTitle()
	task.Content = in.GetContent()

	err = h.r.Update(task)
	if err != nil {
		return nil, err
	}
	return &pb.UpdateTaskReply{}, nil
}

func (h *taskHandler) DeleteTask(ctx context.Context, in *pb.DeleteTaskRequest) (*pb.DeleteTaskReply, error) {
	task, err := h.r.GetById(in.GetUID(), in.GetID())

	if err != nil {
		return nil, err
	}

	err = h.r.Delete(task)
	if err != nil {
		return nil, err
	}
	return &pb.DeleteTaskReply{}, nil
}
