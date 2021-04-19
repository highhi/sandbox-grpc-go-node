package persistence

import (
	"flag"
	"fmt"
	"log"

	"github.com/highhi/grpc-go/app/config"
	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq" // PostgreSQL Driver
)

func NewDB() *sqlx.DB {
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
		log.Fatalln(err)
		panic(err)
	}

	log.Println("db connected")

	return db
}
