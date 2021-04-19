package main

import (
	"flag"
	"fmt"
	"time"

	"github.com/highhi/sandbox-grpc-go-node/app/config"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq" // PostgreSQL Driver
)

type user struct {
	username  string `db:"username"`
	password  string
	email     string
	createdAt time.Time `db:"created_at"`
	updatedAt time.Time `db:"updated_at"`
}

func main() {
	m := flag.String("mode", "local", "environment, dev or prod or ...")
	flag.Parse()
	config.Conf = config.NewConfig(*m)

	dsn := fmt.Sprintf(
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=%s TimeZone=Asia/Tokyo",
		config.Conf.DB.Hostname,
		fmt.Sprint(config.Conf.DB.Port),
		config.Conf.DB.Username,
		config.Conf.DB.Password,
		config.Conf.DB.DBName,
		config.Conf.DB.SSLMode,
	)

	db, err := sqlx.Connect("postgres", dsn)

	if err != nil {
		panic(err)
	}

	fmt.Println("connected")

	sql := `
		INSERT INTO
			users (username, password, email)
		VALUES
			($1, $2, $3)
	`

	res := db.MustExec(sql, "foo", "password", "example@example.com")

	fmt.Println(res)
}
