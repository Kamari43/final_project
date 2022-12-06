package com.example.table;
import io.github.cdimascio.dotenv.Dotenv;
import org.parse4j.Parse;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TableApplication {


	public static void main(String[] args) {
		Dotenv dotenv = Dotenv.configure().filename("/Table/env").load();
		Parse.initialize(dotenv.get("PARSE_APP_ID"), dotenv.get("PARSE_REST_ID"));
		SpringApplication.run(TableApplication.class, args);

	}

}
