package persistence

import (
	"log"

	pb "github.com/highhi/grpc-go/app/protobuf"
	"github.com/jmoiron/sqlx"
)

type TaskRepository struct {
	db *sqlx.DB
}

func NewTaskRepository(db *sqlx.DB) *TaskRepository {
	return &TaskRepository{db: db}
}

func (r *TaskRepository) Create(t pb.Task) error {
	query := `
	INSERT INTO tasks
		(uid, title, content, created_at, updated_at)
	VALUES
		(:uid, :title, :content, :created_at, :updated_at)
	`

	res, err := r.db.NamedExec(query, t)

	log.Println(res)

	if err != nil {
		return err
	}

	return nil
}

func (r *TaskRepository) List(uid string) ([]*pb.Task, error) {
	tasks := []*pb.Task{}
	query := `SELECT * FROM tasks WHERE uid=$1 ORDER BY crated_at DESC`

	if err := r.db.Select(&tasks, query, uid); err != nil {
		return nil, err
	}

	return tasks, nil
}
