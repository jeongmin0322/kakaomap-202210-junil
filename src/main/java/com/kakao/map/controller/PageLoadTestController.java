package com.kakao.map.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class PageLoadTestController {

    @RequestMapping(value = "/t1", method = RequestMethod.GET)
    public String test1() {
        System.out.println("t1요청 들어옴?");
        return "test1";
    }

    @RequestMapping(value = "/test/page", method = RequestMethod.GET)
    public String test2() {
        return "test/test2";
    }

    @RequestMapping(value = "/map", method = RequestMethod.GET)
    public String kakaoMap() {
        return "map";
    }
}
