package cz.matyas.Pojistovna.mapper;

import cz.matyas.Pojistovna.domain.User;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserRowMapper implements RowMapper<User> {
    @Override
    public User mapRow(ResultSet rs, int rowNum) throws SQLException {
        User user = new User();
        user.setId(rs.getInt("id"));
        user.setName(rs.getString("name"));
        user.setSurname(rs.getString("surname"));
        user.setEmail(rs.getString("email"));
        user.setPhone(rs.getInt("phone"));
        user.setCity(rs.getString("city"));
        user.setStreet(rs.getString("street"));
        user.setHouseNumber(rs.getInt("house_number"));
        user.setZipcode(rs.getInt("zipcode"));
        user.setAge(rs.getInt("age"));
        user.setPassword(rs.getString("password"));
        return user;

    }
}
