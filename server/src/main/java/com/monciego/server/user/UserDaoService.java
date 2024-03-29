package com.monciego.server.user;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class UserDaoService {
    // JPA / Hibernate > Database
    
    private static List<User> users = new ArrayList<>();

    static {
        users.add(new User(1,"Jericho","monciego",LocalDate.now().minusYears(20)));
        users.add(new User(2,"Clark","sonofkrypton",LocalDate.now().minusYears(30)));
        users.add(new User(3,"Diana","dianaprince",LocalDate.now().minusYears(23)));
    }

    public List<User> findAll() {
        return users;
    }
}
