package com.hdhiren.oneapp;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.web.reactive.function.server.RequestPredicates.GET;
import static org.springframework.web.reactive.function.server.ServerResponse.ok;

@SpringBootApplication
public class OneappApplication {

	public static void main(String[] args) {
		SpringApplication.run(OneappApplication.class,
				args);
	}

	@Bean
	public RouterFunction<ServerResponse> htmlRouter(
			@Value("classpath:/public/index.html") Resource html) {
		return RouterFunctions.route(GET("/"), request
				-> ok().contentType(MediaType.TEXT_HTML).bodyValue(html)
		);
	}

}
