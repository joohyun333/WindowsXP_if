package com.translater.Controller;

import com.translater.Service.DeepLService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TranslateController {

    @Autowired
    DeepLService deepLService;

    @PostMapping("/translate")
    @ResponseBody
    public ResponseEntity<> postResponseJsonContent(String text) throws Exception {
        deepLService.getLanguagesExample();
        return new ResponseTransfer("Thanks For Posting!!!");
    }
}
