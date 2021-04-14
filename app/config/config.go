package config

type DBConfig struct {
	Hostname string
	Port     int
	Username string
	Password string
	DBName   string
	SSLMode  string
}

type Config struct {
	DB DBConfig
}

var Conf *Config

func NewConfig(appMode string) *Config {
	switch appMode {
	case "local":
		return &Config{
			DB: DBConfig{
				Hostname: "pg",
				Port:     5432,
				Username: "grpc_go_node",
				Password: "grpc_go_node",
				DBName:   "grpc_db",
				SSLMode:  "disable",
			},
		}
	}

	return nil
}
