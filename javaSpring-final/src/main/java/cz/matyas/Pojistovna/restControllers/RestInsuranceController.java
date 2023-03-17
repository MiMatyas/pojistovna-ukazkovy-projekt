package cz.matyas.Pojistovna.restControllers;

import cz.matyas.Pojistovna.domain.Insurance;
import cz.matyas.Pojistovna.services.api.InsuranceService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("insurance")
@CrossOrigin(origins = "http://localhost:3000")
public class RestInsuranceController {
    private final InsuranceService insuranceService;

    public RestInsuranceController(InsuranceService insuranceService) {
        this.insuranceService = insuranceService;
    }

    @PostMapping()
    public ResponseEntity addInsurance(@RequestBody Insurance insurance) {
        Integer id = insuranceService.add(insurance);
        if (id != null) {
            return new ResponseEntity<>(id, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity getAll() {
        List<Insurance> insurancies = insuranceService.getAllInsurencies();
        return new ResponseEntity<>(insurancies, HttpStatus.OK);

    }

    @GetMapping("/usetinsurance/{userId}")
    public ResponseEntity gettAllInsuranciesWithUserId(@PathVariable("userId") int userId) {
        List<Insurance> insurancies = insuranceService.getInsuranciesByUserId(userId);
        return new ResponseEntity<>(insurancies, HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity getInsurance(@PathVariable("id") int id) {
        Insurance insurance = insuranceService.get(id);

        if (insurance != null) {
            return new ResponseEntity<>(insurance, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("{id}")
    public ResponseEntity deleteInsurance(@PathVariable("id") int id) {
        if (insuranceService.get(id) != null) {
            insuranceService.deleteInsurance(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED).body("Pojištění číslo: " + id + " neexistuje.");
        }
    }

    @PatchMapping("{id}")
    public ResponseEntity updateInsurance(@PathVariable("id") int id, @RequestBody Insurance insurance) {
        if (insuranceService.get(id) != null) {
            insurance.setId(id);
            insuranceService.updateInsurance(id, insurance);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED).body("Pojištění číslo: " + id + " neexistuje.");
        }

    }

}
