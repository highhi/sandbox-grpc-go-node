package persistence

import (
	"log"

	"github.com/highhi/sandbox-grpc-go-node/app/domain/task"
	"github.com/jmoiron/sqlx"
)

type TaskRepository struct {
	db *sqlx.DB
}

func NewTaskRepository(db *sqlx.DB) *TaskRepository {
	return &TaskRepository{db: db}
}

func (r *TaskRepository) Create(t task.Task) error {
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

func (r *TaskRepository) List(uid string) ([]*task.Task, error) {
	tasks := []*task.Task{}
	query := `SELECT * FROM tasks WHERE uid=$1 ORDER BY created_at DESC`

	if err := r.db.Select(&tasks, query, uid); err != nil {
		return nil, err
	}

	return tasks, nil
}

func (r *TaskRepository) GetById(uid string, id int32) (*task.Task, error) {
	t := &task.Task{}
	query := `SELECT * FROM tasks WHERE uid=$1 AND id=$2`
	if err := r.db.Get(t, query, uid, id); err != nil {
		return nil, err
	}
	return t, nil
}

func (r *TaskRepository) Update(uid string, id int32, title string, content string) error {
	query := `
	UPDATE tasks
	SET title = :title, content = :content
	WHERE uid = :uid AND id = :id;
	`
	_, err := r.db.NamedExec(query, map[string]interface{}{
		"uid":     uid,
		"id":      id,
		"title":   title,
		"content": content,
	})

	if err != nil {
		return err
	}

	return nil
}

func (r *TaskRepository) Delete(uid string, id int32) error {
	query := ` DELETE FROM ONLY tasks WHERE uid = :uid AND id = :id;`
	_, err := r.db.NamedExec(query, map[string]interface{}{
		uid:  uid,
		"id": id,
	})

	if err != nil {
		return err
	}

	return nil
}
