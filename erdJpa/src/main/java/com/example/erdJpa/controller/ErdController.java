package com.example.erdJpa.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ErdController {

    @GetMapping("/erdMaker")
    public String erdMaker(){
        return "erdMaker";
    }

}
