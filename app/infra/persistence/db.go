package persistence

import (
	"fmt"
	"log"

	"github.com/highhi/sandbox-grpc-go-node/app/config"
	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq" // PostgreSQL Driver
)

func NewDB() *sqlx.DB {
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
		log.Fatalln(err)
		panic(err)
	}

	log.Println("db connected")

	return db
}
