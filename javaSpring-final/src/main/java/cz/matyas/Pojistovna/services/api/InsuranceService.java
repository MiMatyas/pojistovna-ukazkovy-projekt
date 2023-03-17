package cz.matyas.Pojistovna.services.api;


import cz.matyas.Pojistovna.domain.Insurance;

import java.util.List;

public interface InsuranceService {
    /**
     * vrátí list všech pojištění všech pojištěnců
     */
    List<Insurance> getAllInsurencies();

    /**
     *vrátí konkretni pojištění na základě jeho id
     */
    Insurance get(Integer id);

    /**
     * vrátí všechna pojištění pojištěnce na základě jeho id
     */
    List<Insurance> getInsuranciesByUserId (Integer userId);

    /**
     * přidá do tabulky pojištění nové pojištění
     */
    Integer add(Insurance insurance);

    /**
     * Odstraní pojištění z tabulky insurance na základě id daného pojištění
     */
    void deleteInsurance(Integer id);

    /**
     * přepíše pojištění na základě jeho id, volá si i tělo pojištění, kterám má staré pojištění přepsat
     */
    void updateInsurance(Integer id, Insurance insurance);

}
