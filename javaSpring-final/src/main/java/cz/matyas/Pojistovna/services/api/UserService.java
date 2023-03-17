package cz.matyas.Pojistovna.services.api;
import cz.matyas.Pojistovna.domain.Insurance;
import cz.matyas.Pojistovna.domain.User;

import java.util.List;
public interface UserService {
    /**
    * vrátí list všech pojištěnců
    */
    List <User> getAllUsers();
    /**
     * vrátí konkretniho uživatele na zakladě jeho id
     */
    User getUserWithId(Integer id);
    /**
     * přidá do tabulky user nového uživatele
     */
    Integer add(User user);
    /**
     * Odstraní uživatele z tabulky user na základě jeho id
     */
    void deleteUser(Integer id);

    /**
     * přepíše uživatele na základě jeho id, volá si i tělo uživatele, kterým chceme uživatele přepsat
     */
    void updateUser(Integer id, User user);



}
