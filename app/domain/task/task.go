package task

import (
	"time"

	pb "github.com/highhi/sandbox-grpc-go-node/app/pb"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type Task struct {
	ID        uint32 `db:"id"`
	UID       string `db:"uid"`
	Title     string
	Content   string
	CreatedAt time.Time `db:"created_at"`
	UpdatedAt time.Time `db:"updated_at"`
}

func (t *Task) ToPB() *pb.Task {
	return &pb.Task{
		ID:        t.ID,
		UID:       t.UID,
		Content:   t.Content,
		Title:     t.Title,
		CreatedAt: timestamppb.New(t.CreatedAt),
		UpdatedAt: timestamppb.New(t.UpdatedAt),
	}
}

func ToPBList(tasks []*Task) []*pb.Task {
	var pbTasks []*pb.Task

	for _, t := range tasks {
		pbTasks = append(pbTasks, t.ToPB())
	}

	return pbTasks
}
