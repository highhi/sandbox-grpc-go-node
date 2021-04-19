package task

import "time"

type Task struct {
	ID        int    `db:"id"`
	UID       string `db:"uid"`
	Title     string
	Content   string
	CreatedAt time.Time `db:"created_at"`
	UpdatedAt time.Time `db:"updated_at"`
}
