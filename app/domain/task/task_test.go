package task

import (
	"testing"
	"time"

	"github.com/google/go-cmp/cmp"
	pb "github.com/highhi/sandbox-grpc-go-node/app/protobuf"
	"google.golang.org/protobuf/testing/protocmp"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func TestToPB(t *testing.T) {
	type args struct {
		id        uint32
		uid       string
		title     string
		content   string
		createdAt time.Time
		updatedAt time.Time
	}

	tests := []struct {
		name string
		args args
		want *pb.Task
	}{
		{
			name: "*pb.Taskが返されること",
			args: args{
				id:        111,
				uid:       "xxxxxx",
				title:     "title",
				content:   "content",
				createdAt: time.Date(2020, time.January, 10, 12, 0, 0, 0, time.Local),
				updatedAt: time.Date(2020, time.January, 10, 12, 0, 0, 0, time.Local),
			},
			want: &pb.Task{
				ID:        111,
				UID:       "xxxxxx",
				Title:     "title",
				Content:   "content",
				CreatedAt: timestamppb.New(time.Date(2020, time.January, 10, 12, 0, 0, 0, time.Local)),
				UpdatedAt: timestamppb.New(time.Date(2020, time.January, 10, 12, 0, 0, 0, time.Local)),
			},
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			task := &Task{
				ID:        tt.args.id,
				UID:       tt.args.uid,
				Title:     tt.args.title,
				Content:   tt.args.content,
				CreatedAt: tt.args.createdAt,
				UpdatedAt: tt.args.updatedAt,
			}
			got := task.ToPB()
			if diff := cmp.Diff(tt.want, got, protocmp.Transform()); diff != "" {
				t.Errorf("(-want + got):\n%s", diff)
			}
		})
	}
}

func TestToPBList(t *testing.T) {
	type args struct {
		id        uint32
		uid       string
		title     string
		content   string
		createdAt time.Time
		updatedAt time.Time
	}

	tests := []struct {
		name  string
		args1 args
		args2 args
		want  []*pb.Task
	}{
		{
			name: "*pb.Taskのスライスが返されること",
			args1: args{
				id:        111,
				uid:       "xxxxxx",
				title:     "title",
				content:   "content",
				createdAt: time.Date(2020, time.January, 10, 12, 0, 0, 0, time.Local),
				updatedAt: time.Date(2020, time.January, 10, 12, 0, 0, 0, time.Local),
			},
			args2: args{
				id:        222,
				uid:       "yyyyyy",
				title:     "title",
				content:   "content",
				createdAt: time.Date(2020, time.January, 10, 12, 0, 0, 0, time.Local),
				updatedAt: time.Date(2020, time.January, 10, 12, 0, 0, 0, time.Local),
			},
			want: []*pb.Task{
				{
					ID:        111,
					UID:       "xxxxxx",
					Title:     "title",
					Content:   "content",
					CreatedAt: timestamppb.New(time.Date(2020, time.January, 10, 12, 0, 0, 0, time.Local)),
					UpdatedAt: timestamppb.New(time.Date(2020, time.January, 10, 12, 0, 0, 0, time.Local)),
				},
				{
					ID:        222,
					UID:       "yyyyyy",
					Title:     "title",
					Content:   "content",
					CreatedAt: timestamppb.New(time.Date(2020, time.January, 10, 12, 0, 0, 0, time.Local)),
					UpdatedAt: timestamppb.New(time.Date(2020, time.January, 10, 12, 0, 0, 0, time.Local)),
				},
			},
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			tasks := []*Task{
				{
					ID:        tt.args1.id,
					UID:       tt.args1.uid,
					Title:     tt.args1.title,
					Content:   tt.args1.content,
					CreatedAt: tt.args1.createdAt,
					UpdatedAt: tt.args1.updatedAt,
				},
				{
					ID:        tt.args2.id,
					UID:       tt.args2.uid,
					Title:     tt.args2.title,
					Content:   tt.args2.content,
					CreatedAt: tt.args2.createdAt,
					UpdatedAt: tt.args2.updatedAt,
				},
			}
			got := ToPBList(tasks)
			if diff := cmp.Diff(tt.want, got, protocmp.Transform()); diff != "" {
				t.Errorf("(-want + got):\n%s", diff)
			}
		})
	}
}
