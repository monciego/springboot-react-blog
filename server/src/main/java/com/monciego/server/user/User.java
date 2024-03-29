package com.monciego.server.user;

import java.time.LocalDate;

public class User {
    private Integer id;
    private String name;
    private String username;
    private LocalDate birthDate;

    public User(Integer id, String name, String username, LocalDate birthDate) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.birthDate = birthDate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }    
    
    @Override
    public String toString() {
        return "User [id=" + id + ", name=" + name + ", username=" + username + ", birthDate=" + birthDate + "]";
    }
}
