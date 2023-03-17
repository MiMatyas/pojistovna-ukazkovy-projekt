package cz.matyas.Pojistovna.services.impl;

import cz.matyas.Pojistovna.domain.User;
import cz.matyas.Pojistovna.mapper.UserRowMapper;
import cz.matyas.Pojistovna.services.api.UserService;
import org.jvnet.staxex.util.FinalArrayList;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Service;

import javax.swing.tree.RowMapper;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;
import java.util.PrimitiveIterator;

@Service
public class UserServiceImpl implements UserService {

    private final JdbcTemplate jdbcTemplate;
    private final UserRowMapper userRowMapper = new UserRowMapper();

    public UserServiceImpl(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }
    @Override
    public List<User> getAllUsers() {
        final String sql = "select * from user";
        return jdbcTemplate.query(sql, userRowMapper);
    }

    @Override
    public User getUserWithId(Integer id) {
        final String sql = "select * from user where user.id = "+id;

        try {
            return jdbcTemplate.queryForObject(sql, userRowMapper);
        }catch (EmptyResultDataAccessException ex){
            return null;
        }
    }

    @Override
    public Integer add(User user) {
        final String sql = "insert into user (name, surname, email, phone, city, street, house_number, zipcode, age, password) values(?,?,?,?,?,?,?,?,?,?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
                PreparedStatement preparedStatement = connection.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);
                preparedStatement.setString(1,user.getName());
                preparedStatement.setString(2,user.getSurname());
                preparedStatement.setString(3,user.getEmail());
                preparedStatement.setInt(4,user.getPhone());
                preparedStatement.setString(5,user.getCity());
                preparedStatement.setString(6,user.getStreet());
                preparedStatement.setInt(7,user.getHouseNumber());
                preparedStatement.setInt(8,user.getZipcode());
                preparedStatement.setInt(9,user.getAge());
                preparedStatement.setString(10,user.getPassword());
                return preparedStatement;
            }
        }, keyHolder);
        if (keyHolder.getKey() != null){
            return keyHolder.getKey().intValue();
        }else {
            return null;
        }
    }

    @Override
    public void deleteUser(Integer id) {
    final String sql = "delete from user where id = ?";
    jdbcTemplate.update(sql, id);
    }

    @Override
    public void updateUser(Integer id, User user) {
        final String sql = "update user set name = ?, surname = ?, email = ?, phone = ?, city = ?, street = ?, house_number = ?, zipcode = ?, age = ?, password = ? where user.id = ?";

        jdbcTemplate.update(sql, user.getName(), user.getSurname(), user.getEmail(), user.getPhone(), user.getCity(), user.getStreet(), user.getHouseNumber(), user.getZipcode(), user.getAge(), user.getPassword(), id);

    }
}
