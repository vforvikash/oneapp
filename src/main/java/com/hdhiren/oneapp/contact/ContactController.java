package com.hdhiren.oneapp.contact;

import com.hdhiren.oneapp.contact.request.RequestForm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping(value = "/contact")
@Slf4j
public class ContactController {

    @PostMapping
    public Mono<String> submitContactForm(@RequestBody RequestForm requestForm) {
        log.info("Contact form received: {}", requestForm);
        return Mono.just(requestForm.getEmail());
    }
}
