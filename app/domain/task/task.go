package task

import (
	"github.com/golang/protobuf/ptypes/timestamp"
)

type Task struct {
	ID        int64  `db:"id"`
	UID       string `db:"uid"`
	Title     string
	Content   string
	CreatedAt *timestamp.Timestamp `db:"created_at"`
	UpdatedAt *timestamp.Timestamp `db:"updated_at"`
}
