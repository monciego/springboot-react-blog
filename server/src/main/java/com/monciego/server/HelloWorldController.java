package com.monciego.server;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class HelloWorldController {

    // @RequestMapping(method=RequestMethod.GET, path="/hello-world")
    @GetMapping("/hello-world")
    public String helloWorld() {
        return "Hello World";
    }
}
