package cz.matyas.Pojistovna.restControllers;

import cz.matyas.Pojistovna.domain.User;
import cz.matyas.Pojistovna.mailSender.JavaMailUtil;
import cz.matyas.Pojistovna.services.api.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
@CrossOrigin(origins = "http://localhost:3000")
public class RestUserController {

    final UserService userService;

    public RestUserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity add(@RequestBody User user) throws Exception {
        Integer id = userService.add(user);
        if (id != null) {
            JavaMailUtil.sendEmail(user);
            return new ResponseEntity<>(id, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("{id}")
    public ResponseEntity get(@PathVariable("id") int id) {
        User user = userService.getUserWithId(id);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity getAll() {
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity deleteUserWithId(@PathVariable("id") int id) {
        if (userService.getUserWithId(id) != null) {
            userService.deleteUser(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED).body("Pojištěnec s id: " + id + " neexistuje.");
        }
    }
@PatchMapping("{id}")
    public ResponseEntity updateUser(@PathVariable("id") int id, @RequestBody User user){
        if (userService.getUserWithId(id) != null){
            userService.updateUser(id, user);
            user.setId(id);
            return ResponseEntity.ok().build();
        }else {
            return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED).body("Pojištěnec s id: " + id + " neexistuje.");
        }

}

}
