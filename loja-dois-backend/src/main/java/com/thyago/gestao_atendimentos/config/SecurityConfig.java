package com.thyago.gestao_atendimentos.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        System.out.println("🔥 SecurityConfig carregado!");
        http
                .cors()
                .and()
                .csrf().disable()
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.GET, "/produtos/**").permitAll()
                        .requestMatchers(HttpMethod.POST, "/produtos/**").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/produtos/**").permitAll()
                        .requestMatchers(HttpMethod.PUT, "/produtos/**").permitAll()
                        .anyRequest().permitAll()
                );

        return http.build();
    }
}