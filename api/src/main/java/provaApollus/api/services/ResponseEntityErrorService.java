package provaApollus.api.services;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;
import java.util.Map;

import static java.time.LocalDateTime.now;

@Service
public class ResponseEntityErrorService {


    public ResponseEntity criar(String menssagem, HttpStatus status){

        Map<String, Object> body = new LinkedHashMap<>();
        body.put("timestamp", now());
        body.put("status", status.value());
        body.put("message", menssagem);

        return new ResponseEntity<>(body, HttpStatus.BAD_REQUEST);
    }
}
